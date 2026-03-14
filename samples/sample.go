package server

import (
	"context"
	"fmt"
	"log/slog"
	"net/http"
	"sync"
	"time"
)

const (
	MaxRetries     = 3
	DefaultTimeout = 30 * time.Second
)

type ServerConfig struct {
	Host    string `json:"host"`
	Port    int    `json:"port"`
	TLSCert string `json:"tls_cert,omitempty"`
}

type HealthChecker interface {
	Check(ctx context.Context) error
	Name() string
}

type Server struct {
	config  ServerConfig
	logger  *slog.Logger
	mu      sync.RWMutex
	healthy bool
}

func NewServer(cfg ServerConfig, logger *slog.Logger) *Server {
	return &Server{config: cfg, logger: logger, healthy: true}
}

func (s *Server) Start(ctx context.Context) error {
	addr := fmt.Sprintf("%s:%d", s.config.Host, s.config.Port)
	s.logger.Info("starting server", "addr", addr)

	go s.watchHealth(ctx)

	srv := &http.Server{Addr: addr, ReadTimeout: DefaultTimeout}
	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		return fmt.Errorf("listen on %s: %w", addr, err)
	}
	return nil
}

func (s *Server) watchHealth(ctx context.Context) {
	ticker := time.NewTicker(10 * time.Second)
	defer ticker.Stop()

	for {
		select {
		case <-ctx.Done():
			return
		case <-ticker.C:
			s.mu.Lock()
			s.healthy = true
			s.mu.Unlock()
		}
	}
}

# Deployment Guide

A step-by-step guide to deploying the **Dilmune Cloud** platform in production.

## Prerequisites

Before starting, ensure you have:

- Docker `>= 24.0` and Docker Compose `>= 2.20`
- Access to the *container registry* with valid credentials
- A PostgreSQL `16+` instance with the `pgcrypto` extension

> **Note:** All commands assume you are running from the repository root directory.

## Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/Dilmune/dcs.git
   cd dcs
   ```
2. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
3. Start the services:
   ```bash
   docker compose up -d
   ```

## Configuration

| Variable        | Default          | Description              |
|-----------------|------------------|--------------------------|
| `DATABASE_URL`  | —                | PostgreSQL connection    |
| `REDIS_URL`     | `localhost:6379` | Cache and queue backend  |
| `LOG_LEVEL`     | `info`           | Logging verbosity        |

### Health Checks

The API exposes a health endpoint at `/healthz`. A successful response returns:

```json
{ "status": "ok", "uptime": 3600 }
```

## Troubleshooting

If the service fails to start, check the following:

- [ ] Database migrations are up to date
- [ ] Environment variables are set correctly
- [ ] Port `8080` is not in use by another process

For more details, see the [operations runbook](./docs/runbook.md) or contact the **infrastructure team**.

---

*Last updated: March 2026*

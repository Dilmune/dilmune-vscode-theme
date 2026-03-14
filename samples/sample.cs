using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CloudMetrics.Services;

[ServiceLifetime(Lifetime.Scoped)]
public class MetricsAggregator
{
    private readonly IMetricsRepository _repository;
    private readonly ILogger<MetricsAggregator> _logger;

    public MetricsAggregator(IMetricsRepository repository, ILogger<MetricsAggregator> logger)
    {
        _repository = repository;
        _logger = logger;
    }

    public async Task<DashboardSummary> GetSummaryAsync(string tenantId, DateRange range)
    {
        var metrics = await _repository.GetByRangeAsync(tenantId, range.Start, range.End);

        var grouped = metrics
            .GroupBy(m => m.Category)
            .ToDictionary(g => g.Key, g => g.Average(m => m.Value));

        var status = grouped.GetValueOrDefault("cpu_usage") switch
        {
            > 90.0 => HealthStatus.Critical,
            > 70.0 => HealthStatus.Warning,
            _ => HealthStatus.Healthy,
        };

        _logger.LogInformation("Summary for {Tenant}: {Status}", tenantId, status);

        return new DashboardSummary(tenantId, grouped, status, DateTime.UtcNow);
    }

    public async Task<IReadOnlyList<Alert>> CheckThresholdsAsync(
        string tenantId,
        Dictionary<string, double> thresholds)
    {
        var latest = await _repository.GetLatestAsync(tenantId);
        var alerts = new List<Alert>();

        foreach (var (category, limit) in thresholds)
        {
            if (latest.TryGetValue(category, out var value) && value > limit)
            {
                alerts.Add(new Alert(category, value, limit, DateTime.UtcNow));
            }
        }

        return alerts;
    }
}

public record DashboardSummary(
    string TenantId,
    Dictionary<string, double> Averages,
    HealthStatus Status,
    DateTime GeneratedAt);

public record Alert(string Category, double Value, double Threshold, DateTime TriggeredAt);

public enum HealthStatus { Healthy, Warning, Critical }

CREATE TABLE IF NOT EXISTS orders (
    id          BIGSERIAL PRIMARY KEY,
    customer_id BIGINT NOT NULL REFERENCES customers(id),
    status      VARCHAR(20) NOT NULL DEFAULT 'pending',
    total       DECIMAL(12, 2) NOT NULL,
    currency    CHAR(3) NOT NULL DEFAULT 'USD',
    notes       TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ
);

CREATE INDEX idx_orders_customer ON orders (customer_id, created_at DESC);

-- Monthly revenue report with customer details
SELECT
    c.name                          AS customer_name,
    c.email,
    COUNT(o.id)                     AS order_count,
    SUM(o.total)                    AS revenue,
    ROUND(AVG(o.total), 2)         AS avg_order_value,
    MAX(o.created_at)               AS last_order
FROM orders o
INNER JOIN customers c ON c.id = o.customer_id
WHERE o.status IN ('completed', 'shipped')
  AND o.created_at >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month')
  AND o.created_at <  DATE_TRUNC('month', CURRENT_DATE)
GROUP BY c.id, c.name, c.email
HAVING SUM(o.total) > 100.00
ORDER BY revenue DESC
LIMIT 50;

-- Update stale pending orders
UPDATE orders
SET status = 'cancelled',
    updated_at = NOW()
WHERE status = 'pending'
  AND created_at < NOW() - INTERVAL '7 days';

-- Top products by order volume (subquery)
SELECT p.name, sub.times_ordered
FROM products p
INNER JOIN (
    SELECT product_id, COUNT(*) AS times_ordered
    FROM order_items
    GROUP BY product_id
    ORDER BY times_ordered DESC
    LIMIT 10
) sub ON sub.product_id = p.id;

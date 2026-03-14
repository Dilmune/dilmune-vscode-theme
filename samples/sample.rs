use std::collections::HashMap;
use std::fmt;
use std::sync::Arc;

const MAX_CONNECTIONS: usize = 128;

#[derive(Debug, Clone)]
pub struct ConnectionPool {
    name: String,
    max_size: usize,
    connections: HashMap<u64, Connection>,
}

#[derive(Debug, Clone)]
struct Connection {
    id: u64,
    active: bool,
}

pub trait Poolable: Send + Sync {
    fn acquire(&mut self) -> Result<u64, PoolError>;
    fn release(&mut self, id: u64);
    fn active_count(&self) -> usize;
}

#[derive(Debug)]
pub enum PoolError {
    Exhausted,
    InvalidId(u64),
    Timeout { elapsed_ms: u64 },
}

impl fmt::Display for PoolError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            PoolError::Exhausted => write!(f, "connection pool exhausted"),
            PoolError::InvalidId(id) => write!(f, "invalid connection id: {id}"),
            PoolError::Timeout { elapsed_ms } => {
                write!(f, "pool acquire timed out after {elapsed_ms}ms")
            }
        }
    }
}

impl Poolable for ConnectionPool {
    fn acquire(&mut self) -> Result<u64, PoolError> {
        if self.connections.len() >= self.max_size {
            return Err(PoolError::Exhausted);
        }
        let id = self.connections.len() as u64 + 1;
        self.connections.insert(id, Connection { id, active: true });
        Ok(id)
    }

    fn release(&mut self, id: u64) {
        if let Some(conn) = self.connections.get_mut(&id) {
            conn.active = false;
        }
    }

    fn active_count(&self) -> usize {
        self.connections.values().filter(|c| c.active).count()
    }
}

pub fn create_shared_pool(name: &str) -> Arc<ConnectionPool> {
    Arc::new(ConnectionPool {
        name: name.to_owned(),
        max_size: MAX_CONNECTIONS,
        connections: HashMap::new(),
    })
}

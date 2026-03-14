export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  hasMore: boolean;
}

export enum LogLevel {
  Debug = 'debug',
  Info = 'info',
  Warn = 'warn',
  Error = 'error',
}

type Serializable = string | number | boolean | null | Serializable[];

interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

const DEFAULT_TTL = 60_000;

class MemoryCache<T extends Serializable> {
  private store = new Map<string, CacheEntry<T>>();

  set(key: string, value: T, ttl = DEFAULT_TTL): void {
    this.store.set(key, { value, expiresAt: Date.now() + ttl });
  }

  get(key: string): T | undefined {
    const entry = this.store.get(key);
    if (!entry || entry.expiresAt < Date.now()) {
      this.store.delete(key);
      return undefined;
    }
    return entry.value;
  }
}

async function fetchWithRetry<T>(
  url: string,
  retries = 3,
): Promise<PaginatedResponse<T>> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const response = await fetch(url);
    if (response.ok) {
      return (await response.json()) as PaginatedResponse<T>;
    }
    const delay = Math.min(1000 * 2 ** attempt, 10_000);
    console.warn(`Attempt ${attempt} failed — retrying in ${delay}ms`);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  throw new Error(`Failed to fetch ${url} after ${retries} attempts`);
}

export function formatLogEntry(level: LogLevel, message: string): string {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
}

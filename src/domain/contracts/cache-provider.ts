export interface ICacheProvider {
  set<T = unknown>(key: string, value: T, ttl?: number): Promise<void>;
  get<T = unknown>(key: string): Promise<T | null>;
  del(key: string): Promise<void>;
  reset(): Promise<void>;
}

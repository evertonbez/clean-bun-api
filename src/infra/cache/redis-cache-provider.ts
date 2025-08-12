import type { ICacheProvider } from "@/domain/contracts/cache-provider";
import Redis from "ioredis";
import { redisConfig } from "../config/redis";

export class RedisCacheProvider implements ICacheProvider {
  private client: Redis;

  constructor() {
    this.client = new Redis(redisConfig.url);
  }

  async set<T = unknown>(key: string, value: T, ttl?: number): Promise<void> {
    const stringValue = JSON.stringify(value);
    if (ttl) {
      await this.client.set(key, stringValue, "EX", ttl);
    } else {
      await this.client.set(key, stringValue);
    }
  }

  async get<T = unknown>(key: string): Promise<T | null> {
    const value = await this.client.get(key);
    if (!value) return null;
    return JSON.parse(value) as T;
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  async reset(): Promise<void> {
    await this.client.flushall();
  }
}

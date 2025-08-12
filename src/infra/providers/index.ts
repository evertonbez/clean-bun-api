import { container } from "tsyringe";
import { ResendMailProvider } from "../mail/resend-mail-provider";
import type { IMailProvider } from "@/domain/contracts/mail-provider";
import type { ICacheProvider } from "@/domain/contracts/cache-provider";
import { RedisCacheProvider } from "../cache/redis-cache-provider";

export const MailProviderToken = Symbol("MailProvider");
container.registerSingleton<IMailProvider>(
  MailProviderToken,
  ResendMailProvider
);

export const CacheProviderToken = Symbol("CacheProvider");
container.registerSingleton<ICacheProvider>(
  CacheProviderToken,
  RedisCacheProvider
);

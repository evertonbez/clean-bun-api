import type { MiddlewareHandler } from "hono";
import { rateLimiter } from "hono-rate-limiter";
import { withAuth } from "./auth";

export const protectedMiddleware: MiddlewareHandler[] = [
  withAuth,
  rateLimiter({
    windowMs: 1 * 60 * 1000, // 10 minutes
    limit: 60,
    keyGenerator: (c) => c.get("session")?.user?.id ?? "unknown",
    statusCode: 429,
    message: "Rate limit exceeded",
  }),
];

import { z } from "@hono/zod-openapi";

export const accountResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.iso.datetime(),
});

export const createAccountSchema = z.object({
  name: z.string(),
});

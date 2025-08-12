import { z } from "@hono/zod-openapi";

export const boardSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  ownerId: z.string(),
});

export const createBoardSchema = z.object({
  name: z.string(),
});

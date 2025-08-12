import { auth } from "@/lib/auth";
import { OpenAPIHono } from "@hono/zod-openapi";

const app = new OpenAPIHono();

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

export const authRouter = app;

import { auth } from "@/lib/auth";
import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";

const app = new OpenAPIHono();

app.use(
  "/*",
  cors({
    origin: "http://localhost:3001",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.on(["POST", "GET"], "/*", (c) => {
  return auth.handler(c.req.raw);
});

export const authRouter = app;

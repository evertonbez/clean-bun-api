import { OpenAPIHono } from "@hono/zod-openapi";
import { authRouter } from "./auth";
import { boardsRouter } from "./boards";

const routers = new OpenAPIHono();

// Public routes
routers.route("/api/auth", authRouter);

// Private routes
routers.route("/boards", boardsRouter);

export { routers };

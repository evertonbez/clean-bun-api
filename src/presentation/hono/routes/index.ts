import { OpenAPIHono } from "@hono/zod-openapi";
import { accountRouter } from "./account";
import { authRouter } from "./auth";

const routers = new OpenAPIHono();

// Public routes
routers.route("/api/auth", authRouter);

// Private routes
routers.route("/accounts", accountRouter);

export { routers };

import { OpenAPIHono } from "@hono/zod-openapi";
import { authRouter } from "./auth";
import { boardsRouter } from "./boards";
import { protectedMiddleware } from "../middlewares";

const routers = new OpenAPIHono();

routers.route("/api/auth", authRouter);

routers.use(...protectedMiddleware);

routers.route("/boards", boardsRouter);

export { routers };

import { OpenAPIHono } from "@hono/zod-openapi";
import { accountRouter } from "./account";
import { authRouter } from "./auth";

const routers = new OpenAPIHono();

routers.route("/", authRouter).route("/accounts", accountRouter);

export { routers };

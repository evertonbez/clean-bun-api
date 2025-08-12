import { OpenAPIHono } from "@hono/zod-openapi";
import { accountRouter } from "./account";

const routers = new OpenAPIHono();

routers.route("/accounts", accountRouter);

export { routers };

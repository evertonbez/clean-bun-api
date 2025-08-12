import "../container";

import { OpenAPIHono } from "@hono/zod-openapi";
import { Scalar } from "@scalar/hono-api-reference";
import { secureHeaders } from "hono/secure-headers";
import { routers } from "./routes";

export function makeHonoApp() {
  const app = new OpenAPIHono({
    defaultHook: (result, c) => {
      if (!result.success) {
        return c.json({ success: false, error: result.error }, 400);
      }
    },
  });

  app.use(secureHeaders());

  app.doc("/openapi", {
    openapi: "3.1.0",
    info: {
      version: "0.0.1",
      title: "API",
      description: "Domain Driven Design API",
    },
    servers: [{ url: "http://localhost:3000", description: "Local API" }],
    security: [
      {
        oauth2: [],
      },
      { token: [] },
    ],
  });

  app.openAPIRegistry.registerComponent("securitySchemes", "token", {
    type: "http",
    scheme: "bearer",
    description: "Default authentication mechanism",
  });

  app.get(
    "/",
    Scalar({ url: "/openapi", pageTitle: "DDD API", theme: "saturn" })
  );

  app.route("/", routers);

  return app;
}

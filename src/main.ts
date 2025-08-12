import "reflect-metadata";

import { makeHonoApp } from "./presentation/hono/app_factory";

const app = makeHonoApp();

export default app;

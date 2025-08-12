import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { factoryFindAllAccountsUsecase } from "../../factories/account-factory";
import { container } from "tsyringe";
import { FindAllAccountsUsecase } from "../../../application/usecases/account/find-all-accounts.usecase";
import { CreateAccountUsecase } from "../../../application/usecases/account/create-account.usecase";

const app = new OpenAPIHono();

const accountResponseSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.iso.datetime(),
});

app.openapi(
  createRoute({
    method: "get",
    path: "/",
    summary: "Get all accounts",
    description: "Get all accounts",
    tags: ["Accounts"],
    responses: {
      200: {
        description: "Retrive a list of accounts",
        content: {
          "application/json": {
            schema: z.object({
              data: z.array(accountResponseSchema),
            }),
          },
        },
      },
    },
  }),
  async (c) => {
    const usecase = container.resolve(FindAllAccountsUsecase);

    const accounts = await usecase.execute();

    return c.json(
      {
        data: accounts,
      },
      200
    );
  }
);

app.openapi(
  createRoute({
    method: "post",
    path: "/",
    summary: "Create an account",
    description: "Create an account",
    tags: ["Accounts"],
    request: {
      body: {
        description: "Account data",
        content: {
          "application/json": {
            schema: z.object({
              name: z.string(),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "Account created",
        content: {
          "application/json": {
            schema: accountResponseSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const usecase = container.resolve(CreateAccountUsecase);

    const account = await usecase.execute(c.req.valid("json"));

    return c.json(account, 200);
  }
);

export const accountRouter = app;

import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { boardSchema, createBoardSchema } from "./schema";
import { ListBoardsUsecase } from "@/application/usecases/board/list-boards.usecase";
import { container } from "tsyringe";

const app = new OpenAPIHono();

app.openapi(
  createRoute({
    method: "get",
    path: "/",
    summary: "Get all boards",
    description: "Get all boards",
    tags: ["Boards"],
    responses: {
      200: {
        description: "Retrive a list of accounts",
        content: {
          "application/json": {
            schema: z.object({
              data: z.array(boardSchema),
            }),
          },
        },
      },
    },
  }),
  async (c) => {
    const usecase = container.resolve(ListBoardsUsecase);

    const boards = await usecase.execute();

    return c.json(
      {
        data: boards,
      },
      200
    );
  }
);

app.openapi(
  createRoute({
    method: "post",
    path: "/",
    summary: "Create a board",
    description: "Create a board",
    tags: ["Boards"],
    request: {
      body: {
        description: "Account data",
        content: {
          "application/json": {
            schema: createBoardSchema,
          },
        },
      },
    },
    responses: {
      200: {
        description: "Account created",
        content: {
          "application/json": {
            schema: boardSchema,
          },
        },
      },
    },
  }),
  async (c) => {
    const board = {
      id: "1",
      name: "Board 1",
      createdAt: new Date(),
      updatedAt: new Date(),
      ownerId: "",
    };

    return c.json(board, 200);
  }
);

export const boardsRouter = app;

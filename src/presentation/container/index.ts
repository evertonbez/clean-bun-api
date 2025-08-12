import { container } from "tsyringe";
import "@/infra/providers";
import type { IBoardRepository } from "@/domain/repositories/board_repository";
import { PrismaBoardRepository } from "@/infra/database/repositories/prisma_board_repository";

export const BoardRepositoryToken = Symbol("BoardRepository");
container.registerSingleton<IBoardRepository>(
  BoardRepositoryToken,
  PrismaBoardRepository
);

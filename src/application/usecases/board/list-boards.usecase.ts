import type { UseCase } from "@/domain/contracts/usecase";
import type { Board } from "@/domain/entities/board";
import type { IBoardRepository } from "@/domain/repositories/board_repository";
import { BoardRepositoryToken } from "@/presentation/container";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListBoardsUsecase implements UseCase {
  constructor(
    @inject(BoardRepositoryToken)
    private readonly boardRepository: IBoardRepository
  ) {}

  async execute(): Promise<Board[]> {
    const boards = await this.boardRepository.findAll();

    return boards;
  }
}

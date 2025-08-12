import { Board } from "@/domain/entities/board";
import type { IBoardRepository } from "@/domain/repositories/board_repository";
import { prisma } from "@/infra/database/client";

export class PrismaBoardRepository implements IBoardRepository {
  async findAll(): Promise<Board[]> {
    const boards = await prisma.board.findMany();

    return boards.map(
      (board) =>
        new Board({
          id: board.id,
          name: board.name,
          createdAt: board.createdAt,
          updatedAt: board.updatedAt,
          ownerId: board.ownerId,
        })
    );
  }

  async create(
    board: Omit<Board, "id" | "createdAt" | "updatedAt">
  ): Promise<Board> {
    const newBoard = await prisma.board.create({
      data: { name: board.name, ownerId: board.ownerId },
    });

    return new Board({
      id: newBoard.id,
      name: newBoard.name,
      createdAt: newBoard.createdAt,
      updatedAt: newBoard.updatedAt,
      ownerId: newBoard.ownerId,
    });
  }

  async findById(id: string): Promise<Board | null> {
    const board = await prisma.board.findUnique({
      where: { id },
    });

    if (!board) return null;

    return new Board({
      id: board.id,
      name: board.name,
      createdAt: board.createdAt,
      updatedAt: board.updatedAt,
      ownerId: board.ownerId,
    });
  }

  async update(board: Board): Promise<Board> {
    const updatedBoard = await prisma.board.update({
      where: { id: board.id },
      data: { name: board.name },
    });

    return new Board({
      id: updatedBoard.id,
      name: updatedBoard.name,
      createdAt: updatedBoard.createdAt,
      updatedAt: updatedBoard.updatedAt,
      ownerId: updatedBoard.ownerId,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.board.delete({
      where: { id },
    });
  }
}

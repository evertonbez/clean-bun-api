import type { Board } from "../entities/board";

export interface IBoardRepository {
  findAll(): Promise<Board[]>;
  create(board: Omit<Board, "id" | "createdAt">): Promise<Board>;
  findById(id: string): Promise<Board | null>;
  update(board: Board): Promise<Board>;
  delete(id: string): Promise<void>;
}

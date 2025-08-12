import type { Account } from "../entities/account";

export interface IAccountRepository {
  findAll(): Promise<Account[]>;
  create(account: Omit<Account, "id" | "createdAt">): Promise<Account>;
}

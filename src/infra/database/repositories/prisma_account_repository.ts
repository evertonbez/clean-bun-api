import { Account } from "@/domain/entities/account";
import type { IAccountRepository } from "@/domain/repositories/account_repository";
import { prisma } from "@/infra/database/client";

export class PrismaAccountRepository implements IAccountRepository {
  async findAll(): Promise<Account[]> {
    const accounts = await prisma.account.findMany();

    return accounts.map(
      (account) =>
        new Account({
          id: account.id,
          name: account.name,
          createdAt: account.createdAt,
        })
    );
  }

  async create(account: Omit<Account, "id" | "createdAt">): Promise<Account> {
    const newAccount = await prisma.account.create({
      data: { name: account.name },
    });

    return new Account({
      id: newAccount.id,
      name: newAccount.name,
      createdAt: newAccount.createdAt,
    });
  }
}

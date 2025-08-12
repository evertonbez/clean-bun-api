import { container } from "tsyringe";
import "@/infra/providers";
import { PrismaAccountRepository } from "@/infra/database/repositories/prisma_account_repository";
import type { IAccountRepository } from "@/domain/repositories/account_repository";

export const AccountRepositoryToken = Symbol("AccountRepository");
container.registerSingleton<IAccountRepository>(
  AccountRepositoryToken,
  PrismaAccountRepository
);

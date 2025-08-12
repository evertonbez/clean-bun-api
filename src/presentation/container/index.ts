import { container } from "tsyringe";
import { PrismaAccountRepository } from "../../infra/database/repositories/prisma_account_repository";
import type { IAccountRepository } from "../../domain/repositories/account_repository";

container.registerSingleton<IAccountRepository>(
  "AccountRepository",
  PrismaAccountRepository
);

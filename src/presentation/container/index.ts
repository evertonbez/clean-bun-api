import { container } from "tsyringe";
import { PrismaAccountRepository } from "@/infra/database/repositories/prisma_account_repository";
import type { IAccountRepository } from "@/domain/repositories/account_repository";
import type { IMailProvider } from "@/domain/contracts/mail-provider";
import { ResendMailProvider } from "@/infra/mail/resend-mail-provider";

export const MailProviderToken = Symbol("MailProvider");
container.registerSingleton<IMailProvider>(
  MailProviderToken,
  ResendMailProvider
);

export const AccountRepositoryToken = Symbol("AccountRepository");
container.registerSingleton<IAccountRepository>(
  AccountRepositoryToken,
  PrismaAccountRepository
);

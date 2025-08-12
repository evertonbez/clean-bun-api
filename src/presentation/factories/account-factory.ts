import { ResendMailProvider } from "@/infra/mail/resend-mail-provider";
import { FindAllAccountsUsecase } from "../../application/usecases/account/find-all-accounts.usecase";
import { PrismaAccountRepository } from "../../infra/database/repositories/prisma_account_repository";
import { RedisCacheProvider } from "@/infra/cache/redis-cache-provider";

export function factoryFindAllAccountsUsecase() {
  const accountRepository = new PrismaAccountRepository();
  const cacheProvider = new RedisCacheProvider();

  return new FindAllAccountsUsecase(accountRepository, cacheProvider);
}

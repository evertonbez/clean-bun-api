import { FindAllAccountsUsecase } from "../../application/usecases/account/find-all-accounts.usecase";
import { PrismaAccountRepository } from "../../infra/database/repositories/prisma_account_repository";

export function factoryFindAllAccountsUsecase() {
  const accountRepository = new PrismaAccountRepository();

  return new FindAllAccountsUsecase(accountRepository);
}

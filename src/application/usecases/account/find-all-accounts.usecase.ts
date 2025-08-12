import { inject, injectable } from "tsyringe";
import type { UseCase } from "../../../domain/contracts/usecase";
import type { Account } from "../../../domain/entities/account";
import type { IAccountRepository } from "../../../domain/repositories/account_repository";
import { AccountRepositoryToken } from "@/presentation/container";
import { CacheProviderToken } from "@/infra/providers";
import type { ICacheProvider } from "@/domain/contracts/cache-provider";

@injectable()
export class FindAllAccountsUsecase implements UseCase {
  constructor(
    @inject(AccountRepositoryToken)
    private readonly accountRepository: IAccountRepository,
    @inject(CacheProviderToken)
    private readonly cacheProvider: ICacheProvider
  ) {}

  async execute(): Promise<Account[]> {
    const cachedAccounts = await this.cacheProvider.get<Account[]>("accounts");
    if (cachedAccounts) return cachedAccounts;

    const accounts = await this.accountRepository.findAll();

    await this.cacheProvider.set("accounts", accounts, 60 * 60 * 24);

    return accounts;
  }
}

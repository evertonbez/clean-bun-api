import { inject, injectable } from "tsyringe";
import type { UseCase } from "../../../domain/contracts/usecase";
import type { Account } from "../../../domain/entities/account";
import type { IAccountRepository } from "../../../domain/repositories/account_repository";

@injectable()
export class FindAllAccountsUsecase implements UseCase {
  constructor(
    @inject("AccountRepository")
    private readonly accountRepository: IAccountRepository
  ) {}

  async execute(): Promise<Account[]> {
    const accounts = await this.accountRepository.findAll();

    return accounts;
  }
}

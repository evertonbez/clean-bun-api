import { inject, injectable } from "tsyringe";
import type { UseCase } from "../../../domain/contracts/usecase";
import type { Account } from "../../../domain/entities/account";
import type { IAccountRepository } from "../../../domain/repositories/account_repository";

interface CreateAccountInput {
  name: string;
}

@injectable()
export class CreateAccountUsecase implements UseCase {
  constructor(
    @inject("AccountRepository")
    private readonly accountRepository: IAccountRepository
  ) {}

  async execute(data: CreateAccountInput): Promise<Account> {
    const account = await this.accountRepository.create(data);

    return account;
  }
}

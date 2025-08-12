import { inject, injectable } from "tsyringe";
import type { UseCase } from "@/domain/contracts/usecase";
import type { Account } from "@/domain/entities/account";
import type { IAccountRepository } from "@/domain/repositories/account_repository";
import type { IMailProvider } from "@/domain/contracts/mail-provider";
import { AccountRepositoryToken } from "@/presentation/container";
import { MailProviderToken } from "@/infra/providers";

interface CreateAccountInput {
  name: string;
}

@injectable()
export class CreateAccountUsecase implements UseCase {
  constructor(
    @inject(AccountRepositoryToken)
    private readonly accountRepository: IAccountRepository,
    @inject(MailProviderToken)
    private readonly mailProvider: IMailProvider
  ) {}

  async execute(data: CreateAccountInput): Promise<Account> {
    const account = await this.accountRepository.create(data);

    await this.mailProvider.sendMail({
      to: "delivered@resend.dev",
      subject: "Conta Criada",
      body: `Conta ${account.name} criada com sucesso`,
    });

    return account;
  }
}

import type {
  IMailProvider,
  SendMailData,
} from "@/domain/contracts/mail-provider";
import { resend } from "../config/resend";

export class ResendMailProvider implements IMailProvider {
  async sendMail(data: SendMailData): Promise<void> {
    await resend.emails.send({
      from: "Everton Fernandes <noreply@everton.place>",
      to: data.to,
      subject: data.subject,
      html: data.body,
    });
  }
}

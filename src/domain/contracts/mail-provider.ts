export interface SendMailData {
  to: string;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(data: SendMailData): Promise<void>;
}

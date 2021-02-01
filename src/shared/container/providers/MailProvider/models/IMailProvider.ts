import ISendMailDTO from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(to: ISendMailDTO): Promise<void>;
}

import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../MailAdapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '049239aadcae11',
    pass: 'dd0d99b53e014d',
  },
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Edu R <batata@gmail.com>',
      subject,
      html: body,
    });
  }
}

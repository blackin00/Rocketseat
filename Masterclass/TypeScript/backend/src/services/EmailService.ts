interface IMailAuthor {
    name: string;
    email: string;
}

interface IMailMessage {
    subject: string;
    content: string;
    attachment?: Array<string>;
}

interface IMailTDO {
    author: IMailAuthor;
    message: IMailMessage;
}

interface IEmailService {
    sendMail(request: IMailTDO): void;
}

class EmailService implements IEmailService {
    sendMail({ author, message }: IMailTDO) {
        console.log(`email enviado para ${author.name}: ${message.subject}`);
    }
}

export default EmailService;
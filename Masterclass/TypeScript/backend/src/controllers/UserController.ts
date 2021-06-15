import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'daddy', email: 'daddy123@gmail.com' },
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    },

    async create(req: Request, res: Response) {
      const emailService = new EmailService();

      emailService.sendMail({
          author: { 
            name: 'daddy', 
            email: 'daddy123@gmail.com' 
          },
          message: { 
              subject: 'Bem-vindo ao sistema em typescript', 
              content: 'Seja bem-vindo' 
          },
      })

      return res.send();
    }
};
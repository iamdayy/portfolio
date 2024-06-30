import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { MessageController } from '@controllers/messages.controller';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';

export class MessageRoute implements Routes {
  public path = '/message';
  public router = Router();
  public message = new MessageController();
  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.message.createMessage);
    this.router.delete(`${this.path}/:id`, AuthMiddleware, this.message.deleteMessage);
  }
}

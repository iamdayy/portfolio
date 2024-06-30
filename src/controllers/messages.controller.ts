import { Message } from '@interfaces/messages.interface';
import { MessageService } from '@services/messages.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
export class MessageController {
  public message = Container.get(MessageService);

  public createMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const messageData: Message = req.body;
      const createMessageData: Message = await this.message.createMessage(messageData);
      res.redirect('/');
      // res.status(201).json({ data: createMessageData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
  public deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const messageId: string = req.params.id;
      console.log(messageId);

      const message = await this.message.findMessageById(messageId);
      if (!message) {
        res.redirect('/');
      }
      const deleteMessageData: Message = await this.message.deleteMessage(messageId);

      res.redirect('/');
      // res.status(200).json({ data: deleteMessageData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

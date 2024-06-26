import { MessageService } from '@/services/message.service';
import { ProjectService } from '@/services/projects.service';
import { NextFunction, Request, Response } from 'express';
export class ViewsController {
  // public project = new ProjectService();

  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const project = new ProjectService();
      const message = new MessageService();
      project.findAllProject().then(projects => {
        message.findAllMessage().then(messages => {
          res.render('index', { title: 'Hey', projects, messages });
        });
      });
    } catch (error) {
      next(error);
    }
  }
  public login(req: Request, res: Response) {
    res.render('login', { title: 'Login' });
  }
  public register(req: Request, res: Response) {
    res.render('register', { title: 'Reegister' });
  }
}

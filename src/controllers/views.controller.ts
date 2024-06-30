import { AuthService } from '@/services/auth.service';
import { MessageService } from '@/services/messages.service';
import { ProjectService } from '@/services/projects.service';
import { NextFunction, Request, Response } from 'express';

export class ViewsController {
  // public project = new ProjectService();

  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const project = new ProjectService();
      const auth = new AuthService();
      const message = new MessageService();
      project.findAllProject().then(projects => {
        message.findAllMessage().then(messages => {
          auth.isAuthenticated(req).then(user => {
            res.render('index', { title: 'Hey', projects, messages, user });
          });
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

import { Request, Response } from 'express';
export class ViewsController {
  public index(req: Request, res: Response) {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
  }
  public login(req: Request, res: Response) {
    res.render('login', { title: 'Login' });
  }
  public register(req: Request, res: Response) {
    res.render('register', { title: 'Reegister' });
  }
}

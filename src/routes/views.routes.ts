import { ViewsController } from '@/controllers/views.controller';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';

export class ViewRoute implements Routes {
  public path = '/';
  public router = Router();
  public view = new ViewsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.view.index);
    this.router.get(`${this.path}login`, this.view.login);
    this.router.get(`${this.path}register`, this.view.register);
  }
}

import { ProjectController } from '@controllers/projects.controller';
import { Routes } from '@interfaces/routes.interface';
import { AuthMiddleware } from '@middlewares/auth.middleware';
import { Router } from 'express';

export class ProjectRoute implements Routes {
  public path = '/project';
  public router = Router();
  public project = new ProjectController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, this.project.createProject);
    this.router.put(`${this.path}/:id`, AuthMiddleware, this.project.updateProject);
    this.router.delete(`${this.path}/:id`, AuthMiddleware, this.project.deleteProject);
  }
}

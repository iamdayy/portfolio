import { IMAGE_PROJECT_DIR } from '@/config';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { ProjectController } from '@controllers/projects.controller';
import { Routes } from '@interfaces/routes.interface';
import { Router } from 'express';
import multer from 'multer';
import path from 'path';

export class ProjectRoute implements Routes {
  public path = '/project';
  public router = Router();
  public project = new ProjectController();
  public storage = multer.diskStorage({
    destination(req, file, callback) {
      callback(null, 'src/assets/' + IMAGE_PROJECT_DIR);
    },
    filename(req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
  });
  private upload = multer({ storage: this.storage });

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}`, AuthMiddleware, this.upload.single('img'), this.project.createProject);
    this.router.put(`${this.path}/:id`, AuthMiddleware, this.upload.single('img'), this.project.updateProject);
    this.router.delete(`${this.path}/:id`, AuthMiddleware, this.project.deleteProject);
  }
}

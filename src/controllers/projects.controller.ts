import { IMAGE_PROJECT_DIR } from '@/config';
import { Project } from '@interfaces/projects.interface';
import { ProjectService } from '@services/projects.service';
import { NextFunction, Request, Response } from 'express';
import { unlinkSync } from 'fs';
import { Container } from 'typedi';
export class ProjectController {
  public project = Container.get(ProjectService);

  public createProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectData: Project = req.body;
      const img = req.file.fieldname + '-' + req.file.filename;
      projectData.img = `${IMAGE_PROJECT_DIR}/${img}`;
      const createProjectData: Project = await this.project.createProject(projectData);
      res.redirect('/');
      // res.status(201).json({ data: createProjectData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId: string = req.params.id;
      const project = await this.project.findProjectById(projectId);
      if (!project) {
        res.redirect('/');
      }

      const projectData: Project = req.body;
      if (req.file) {
        unlinkSync(__dirname + '/../assets/' + project.img);
        const img = req.file.fieldname + '-' + req.file.filename;
        projectData.img = `${IMAGE_PROJECT_DIR}/${img}`;
      }

      const updateProjectData: Project = await this.project.updateProject(projectId, projectData);

      res.redirect('/');
      // res.status(200).json({ data: updateProjectData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectId: string = req.params.id;
      console.log(projectId);

      const project = await this.project.findProjectById(projectId);
      if (!project) {
        res.redirect('/');
      }
      unlinkSync(__dirname + '/../assets/' + project.img);
      const deleteProjectData: Project = await this.project.deleteProject(projectId);

      res.redirect('/');
      // res.status(200).json({ data: deleteProjectData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

import { Project } from '@interfaces/projects.interface';
import { ProjectService } from '@services/projects.service';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';

export class ProjectController {
  public project = Container.get(ProjectService);

  public createProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const projectData: Project = req.body;
      console.log(projectData);

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
      const projectData: Project = req.body;
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
      const deleteProjectData: Project = await this.project.deleteProject(projectId);

      res.redirect('/');
      // res.status(200).json({ data: deleteProjectData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

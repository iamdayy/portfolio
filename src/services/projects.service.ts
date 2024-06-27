import { HttpException } from '@exceptions/httpException';
import { Project } from '@interfaces/projects.interface';
import { ProjectModel } from '@models/projects.model';
import { Service } from 'typedi';
@Service()
export class ProjectService {
  public async findAllProject(): Promise<Project[]> {
    const projects: Project[] = await ProjectModel.find();
    return projects;
  }

  public async findProjectById(projectId: string): Promise<Project> {
    const findProject: Project = await ProjectModel.findOne({ _id: projectId });
    if (!findProject) throw new HttpException(409, "Project doesn't exist");

    return findProject;
  }

  public async createProject(projectData: Project): Promise<Project> {
    const findProject: Project = await ProjectModel.findOne({ uri: projectData.uri });
    if (findProject) throw new HttpException(409, `This Project ${projectData.title} already exists`);

    const createProjectData: Project = await ProjectModel.create({ ...projectData });

    return createProjectData;
  }

  public async updateProject(projectId: string, projectData: Project): Promise<Project> {
    if (projectData.uri) {
      const findProject: Project = await ProjectModel.findById(projectId);
      if (findProject && findProject._id != projectId) throw new HttpException(409, `This Project ${projectData.title} already exists`);
    }

    const updateProjectById: Project = await ProjectModel.findByIdAndUpdate(projectId, { projectData });
    if (!updateProjectById) throw new HttpException(409, "Project doesn't exist");

    return updateProjectById;
  }

  public async deleteProject(projectId: string): Promise<Project> {
    const deleteProjectById: Project = await ProjectModel.findByIdAndDelete(projectId);
    if (!deleteProjectById) throw new HttpException(409, "Project doesn't exist");
    return deleteProjectById;
  }
}

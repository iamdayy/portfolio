import { Project } from '@interfaces/projects.interface';
import { Document, Schema, model } from 'mongoose';

const ProjectSchema: Schema = new Schema<Project & Document>({
  title: {
    type: String,
    required: true,
  },
  uri: {
    type: String,
    required: true,
    unique: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const ProjectModel = model<Project & Document>('Project', ProjectSchema);

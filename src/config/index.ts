import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
export const { DB_URI, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;
export const { BASE_URL } = process.env;
const DIR = {
  IMAGE_PROJECT_DIR: 'images/projects',
};
export const { IMAGE_PROJECT_DIR } = DIR;

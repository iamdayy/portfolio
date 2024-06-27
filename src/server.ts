import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';
import 'module-alias/register';
import { ProjectRoute } from './routes/projects.route';
import { ViewRoute } from './routes/views.routes';
ValidateEnv();

const app = new App([new UserRoute(), new AuthRoute(), new ViewRoute(), new ProjectRoute()]);

app.listen();

import { DB_DATABASE, DB_HOST, DB_PORT, NODE_ENV } from '@config';
import { ConnectOptions, connect, set } from 'mongoose';

export const dbConnection = async () => {
  const dbConfig = {
    url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions,
  };

  if (NODE_ENV !== 'production') {
    set('debug', true);
  }

  connect(dbConfig.url, dbConfig.options)
    .then(() => {
      console.log('database connected');
    })
    .catch(error => {
      console.error('database error : ' + error);
    });
};

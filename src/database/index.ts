import { DB_DATABASE, DB_URI, NODE_ENV } from '@config';
import { ConnectOptions, connect, set } from 'mongoose';

export const dbConnection = async () => {
  const dbConfig = {
    url: DB_URI,
    options: {
      dbName: DB_DATABASE,
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

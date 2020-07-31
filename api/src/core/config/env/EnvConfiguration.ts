import * as dotenv from 'dotenv';
import IApiConfiguration from './IApiConfiguration';

dotenv.config();

const apiConfiguration: IApiConfiguration = {
  port: parseInt(process.env.PORT, 10),
  database: {
    mongoUri: process.env.MONGO_URI,
    mongoDatabase: process.env.MONGO_DB
  },
  secret: process.env.SECRET,
};

export default apiConfiguration;

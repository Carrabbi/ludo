// eslint-disable-next-line import/no-import-module-exports
import { Sequelize } from 'sequelize';
// eslint-disable-next-line import/extensions
import sqconfig from './config/config.js';

// eslint-disable-next-line no-console
console.log(sqconfig);

const db = new Sequelize(
  sqconfig.database,
  sqconfig.username,
  sqconfig.password,
  {
    dialect: sqconfig.dialect,
    host: sqconfig.host,
    port: sqconfig.port,
  }
);

export default db;

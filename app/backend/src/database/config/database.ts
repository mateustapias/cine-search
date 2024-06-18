import { Options } from 'sequelize';
require('dotenv').config();


const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'cine-search',
  host: process.env.DB_HOST || 'localhost',
  // host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT) || 3307,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  // logging: false,
  // logging: console.log
}

const dBName = process.env.DB_NAME;
console.log(`Database name: ${dBName}`);
const dbHost = process.env.DB_HOST;
console.log(`Host: ${dbHost}`);
const dbPort = process.env.DB_PORT;
console.log(`Porta do banco de dados: ${dbPort}`);

export = config;
import { Options } from 'sequelize';
require('dotenv').config();


const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'cine-search',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  // port: Number(process.env.DB_PORT) || 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

const dbPort = process.env.DB_PORT;
console.log(`Porta do banco de dados: ${dbPort}`);

export = config;


// USANDO POSTGRES
// import { Options } from 'sequelize';

// const config: Options = {
//   username: process.env.POSTGRES_USER || 'default',
//   password: process.env.POSTGRES_PASSWORD || 'xa2KHyXn7pZV',
//   database: process.env.POSTGRES_DATABASE || 'verceldb',
//   host: process.env.POSTGRES_HOST || 'ep-shrill-mode-a4zn4qg2-pooler.us-east-1.aws.neon.tech',
//   port: Number(process.env.DB_PORT) || 5432, // Default PostgreSQL port
//   // dialect: 'mysql',
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false // You may need to set this to false if you're using self-signed certificates
//     }
//   },
//   logging: false,
// };

// export = config;
import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


export const sequelize = new Sequelize({
    database: process.env.PG_DB as string,
    username: process.env.PG_USER as string,
    password: process.env.PG_PASS as string,
    host: process.env.PG_HOST as string,
    port: parseInt(process.env.PG_PORT as string),
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false 
      },
      pool: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 20000
      }
    },
  });
  
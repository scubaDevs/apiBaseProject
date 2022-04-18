import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();


export const sequelize = new Sequelize(
    process.env.PG_URL as string
    //,
   // {
   //     
   //     dialect: 'postgres',
   //     port: parseInt(process.env.PG_PORT as string)
   // }
);
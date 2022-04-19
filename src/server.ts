import express from 'express';
import {Request,Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRoutes from './routes';
import path from 'path';




dotenv.config();



const server = express()
server.use(cors());
server.use(express.urlencoded({extended:false}));
server.use(express.static(path.join(__dirname,'../public')));
server.use(mainRoutes);
server.use(function(req:Request, res:Response) {
    res.send('404: Page not Found');
  });
server.listen(process.env.PORT||80);
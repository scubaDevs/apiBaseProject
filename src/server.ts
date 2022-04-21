import express, { ErrorRequestHandler } from 'express';
import {Request,Response} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mainRoutes from './routing';
import path from 'path'
import passport from 'passport';
import { error } from 'console';






dotenv.config();



const server = express()

server.use(passport.initialize());
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:false}));
server.use(express.static(path.join(__dirname,'../public')));
server.use(mainRoutes);

server.use(function(req:Request, res:Response) {
    res.status(404);
    res.json({error: '404: Page not Found'});
  });

  const errorHandler:ErrorRequestHandler = (err, req, res, next)=>{
      if(err.status){
          res.status(err.status);
      } else {
          res.status(400) //Bad request
      }
      if(err.message){
          res.json({error: err.message})
      } else {
          res.json({error: 'Error!'})
      }
  };
server.use(errorHandler);

server.listen(process.env.PORT||80);
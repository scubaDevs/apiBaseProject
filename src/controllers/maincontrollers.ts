import {Request,Response} from 'express';
import {sequelize} from '../instances/pg';




export const ping = async (req:Request,res:Response)=>{
    try{
        await sequelize.authenticate();
        console.log("It´s working!")
    }catch(error){
       console.log("Deu erro: ", error)
    }

    res.json({message:'pong'})

};

export const home = (req:Request,res:Response)=>{
    res.json({message:'olá mundo novo'})
}

export const sobre = (req:Request, res:Response)=>{
    res.json({message: 'Esta é a página sobre!'})
};
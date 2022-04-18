import {Request,Response} from 'express';



export const ping = (req:Request,res:Response)=>{
    res.json({message:'pong'})
};

export const home = (req:Request,res: Response)=>{
    res.json({msg: 'Olá mundo!'})
};

export const sobre = (req:Request,res:Response)=>{
    res.send("Esta é a página sobre")
}
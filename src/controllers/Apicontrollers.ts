import {Request,Response} from 'express';
import {User} from "../models/User";
import {sequelize} from '../instances/pg';



export const ping = (req:Request,res:Response)=>{
    res.json({message:'pong'})
};

export const home = async  (req:Request,res: Response)=>{
    try{
         await sequelize.authenticate();
        
         console.log("It´s working!")
    
    
    }catch(error){
        console.log("Deu erro: ", error)
    }
    res.json({msg: 'Olá mundo!'})
};

export const createNewUser = async (req:Request,res:Response)=>{
        let email:string = req.body.email;
        let pass:string = req.body.pass;
        let newUser = await User.create({email: email,pass: pass});
        res.json({user: newUser})
        res.end();
}

export const homePost = (req:Request,res:Response)=>{
    res.json({message:"Funcionou"})
};
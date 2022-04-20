import {Request,Response} from 'express';
import {User} from "../models/User";
import { Auth } from '../middlewares/auth';




//***login 
export const login = async (req:Request, res: Response)=>{
    
    if(req.body.email && req.body.pass){
        let email: string = req.body.email;
        let pass: string = req.body.pass;

        const user = await User.findOne({
            where: {email, pass}
        });
        if(user){
            const token = Auth.createToken({id_user: user.id_user})
            res.json({status: true, token: token});
            return 
        }
    }

    res.json({status: false , message: "You are not registered yet.Please, sign up!"})

};

//***

//***Sign Up
export const signup = async (req:Request, res:Response)=>{

        if(req.body.email && req.body.pass){
            let {email,pass} = req.body;
            let hasUser = await User.findOne({ where: { email: email }});
                if(!hasUser){
                    let newUser = await User.create({ email: email,pass: pass });
                    const token = Auth.createToken({id_user: newUser.id_user})
                    res.status(201);
                    res.json({id_user: newUser.id_user, token})
                    return
                } else {
                    res.json({error: 'This user are already registered .Please, login.'})
                    return
                }
        }
        res.json({error: 'Email and password required to Sign Up.'})

};

//***
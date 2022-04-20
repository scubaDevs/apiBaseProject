import passport from "passport";
import {Request, Response, NextFunction} from 'express';
import  jwt from "jsonwebtoken"
import dotenv from 'dotenv';
import {Strategy as JWTStrategy, ExtractJwt} from "passport-jwt";
import { User } from "../models/User";


//***Starting dotenv 

dotenv.config();

//***


//***const and others requeriments


//Passport config start
export const notAuthorizedJson = {status: 401 , message: 'Unauthorized'};

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET as string
}



//Passport config end

//***


//***Auth middlewares and functions

export const Auth = {
    //Create a private route
    privateRoute: (req:Request,res:Response, next: NextFunction)=>{
        passport.authenticate('jwt', (error , user)=>{
                req.user=user
                return user ? next() : next(notAuthorizedJson);
        })(req, res, next); //creating function and function execution at the same time.
    },

    // Create a new token using data and a .env secret key
    createToken: (data:object)=>{
        return jwt.sign(data, process.env.JWT_SECRET as string)
    },

    //Extrac token from a Bearer token  request 
    extractToken: passport.use(new JWTStrategy(options, async (payload, done)=>{
        const user = await User.findByPk(payload.id_user);
    
        if(user){
            done(null,user)
            
        } else {
            done(notAuthorizedJson,false)
            
        }
        return
    })),

    //waiting next middleware or functions...

}
//***


export default passport;

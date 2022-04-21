"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = exports.notAuthorizedJson = void 0;
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const passport_jwt_1 = require("passport-jwt");
const User_1 = require("../models/User");
//***Starting dotenv 
dotenv_1.default.config();
//***
//***const and others requeriments
//Passport config start
exports.notAuthorizedJson = { status: 401, message: 'Unauthorized' };
const options = {
    jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};
//Passport config end
//***
//***Auth middlewares and functions
exports.Auth = {
    //Create a private route
    privateRoute: (req, res, next) => {
        passport_1.default.authenticate('jwt', (error, user) => {
            req.user = user;
            return user ? next() : next(exports.notAuthorizedJson);
        })(req, res, next); //creating function and function execution at the same time.
    },
    // Create a new token using data and a .env secret key
    createToken: (data) => {
        return jsonwebtoken_1.default.sign(data, process.env.JWT_SECRET);
    },
    //Extrac token from a Bearer token  request 
    extractToken: passport_1.default.use(new passport_jwt_1.Strategy(options, (payload, done) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User_1.User.findByPk(payload.id_user);
        if (user) {
            done(null, user);
        }
        else {
            done(exports.notAuthorizedJson, false);
        }
        return;
    }))),
    //waiting next middleware or functions...
};
//***
exports.default = passport_1.default;

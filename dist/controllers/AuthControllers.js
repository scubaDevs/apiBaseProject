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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = exports.login = void 0;
const User_1 = require("../models/User");
const auth_1 = require("../middlewares/auth");
//***login 
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email && req.body.pass) {
        let email = req.body.email;
        let pass = req.body.pass;
        const user = yield User_1.User.findOne({
            where: { email, pass }
        });
        if (user) {
            const token = auth_1.Auth.createToken({ id_user: user.id_user });
            res.json({ status: true, token: token });
            return;
        }
    }
    res.json({ status: false, message: "You are not registered yet.Please, sign up!" });
});
exports.login = login;
//***
//***Sign Up
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body.email && req.body.pass) {
        let { email, pass } = req.body;
        let hasUser = yield User_1.User.findOne({ where: { email: email } });
        if (!hasUser) {
            let newUser = yield User_1.User.create({ email: email, pass: pass });
            const token = auth_1.Auth.createToken({ id_user: newUser.id_user });
            res.status(201);
            res.json({ id_user: newUser.id_user, token });
            return;
        }
        else {
            res.json({ error: 'This user are already registered .Please, login.' });
            return;
        }
    }
    res.json({ error: 'Email and password required to Sign Up.' });
});
exports.signup = signup;
//***

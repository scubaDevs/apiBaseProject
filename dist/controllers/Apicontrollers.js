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
exports.homePost = exports.createNewUser = exports.home = exports.ping = void 0;
const User_1 = require("../models/User");
const pg_1 = require("../instances/pg");
const ping = (req, res) => {
    res.json({ message: 'pong' });
};
exports.ping = ping;
const home = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pg_1.sequelize.authenticate();
        console.log("It´s working!");
    }
    catch (error) {
        console.log("Deu erro: ", error);
    }
    res.json({ msg: 'Olá mundo!' });
});
exports.home = home;
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pg_1.sequelize.authenticate();
        console.log("It´s working!");
    }
    catch (error) {
        console.log("Deu erro: ", error);
    }
    let email = req.body.email;
    let pass = req.body.pass;
    let newUser = yield User_1.User.create({ email: email, pass: pass });
    res.json({ user: newUser });
    res.end();
});
exports.createNewUser = createNewUser;
const homePost = (req, res) => {
    res.json({ message: "Funcionou" });
};
exports.homePost = homePost;

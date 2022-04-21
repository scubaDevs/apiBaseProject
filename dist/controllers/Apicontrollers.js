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
exports.sobre = exports.home = exports.ping = void 0;
const pg_1 = require("../instances/pg");
const ping = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pg_1.sequelize.authenticate();
        console.log("It´s working!");
    }
    catch (error) {
        console.log("Deu erro: ", error);
    }
    res.json({ message: 'pong' });
});
exports.ping = ping;
const home = (req, res) => {
    res.json({ message: 'olá mundo novo' });
};
exports.home = home;
const sobre = (req, res) => {
    res.json({ message: 'Esta é a página sobre!' });
};
exports.sobre = sobre;

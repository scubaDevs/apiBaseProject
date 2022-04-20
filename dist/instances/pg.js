"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelize = new sequelize_1.Sequelize({
    database: process.env.PG_DB,
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT),
    dialect: "postgres",
    dialectOptions: {
        connectTimeout: 60000,
        ssl: {
            rejectUnauthorized: false,
        }
    },
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const path_1 = __importDefault(require("path"));
const passport_1 = __importDefault(require("passport"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.use(passport_1.default.initialize());
server.use((0, cors_1.default)());
server.use(express_1.default.json());
server.use(express_1.default.urlencoded({ extended: false }));
server.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
server.use(routes_1.default);
server.use(function (req, res) {
    res.status(404);
    res.json({ error: '404: Page not Found' });
});
const errorHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status);
    }
    else {
        res.status(400); //Bad request
    }
    if (err.message) {
        res.json({ error: err.message });
    }
    else {
        res.json({ error: 'Error!' });
    }
};
server.use(errorHandler);
server.listen(process.env.PORT || 80);

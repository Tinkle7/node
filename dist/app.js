"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.SERVER_PORT;
require("dotenv").config();
const app = (0, express_1.default)();
app.use("/", (req, res, next) => {
    console.log("allways run");
    next();
});
app.use("/add-product", (req, res, next) => {
    console.log("in the middleware_home");
    res.send(`<form action="/product" method="POST"><input type="text" name="title"><button type="submit">submit</button></form>`);
});
app.use("/product", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
});
app.use("/", (req, res, next) => {
    console.log("in the middleware_express");
    res.send("<h1>Hello from express</h1>");
});
app.listen(PORT);

import express from "express";

const PORT = process.env.SERVER_PORT;

require("dotenv").config();

const app = express();

app.use("/",(req,res,next)=> {
  console.log("allways run");
  next()
})

app.use("/home",(req, res, next) => {
  console.log("in the middleware_home");
  res.send("<h1>Hello from home</h1>");
});

app.use("/",(req, res, next) => {
  console.log("in the middleware_express");
  res.send("<h1>Hello from express</h1>");
});

app.listen(PORT);

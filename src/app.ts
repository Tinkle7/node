import bodyParser from "body-parser";
import express from "express";
require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST">
       <input type="text" name="title">
       <button type="submit">Submit</button>
     </form>`
  );
});

app.use("/product", (req, res, next) => {
  const title = req.body.title;
  console.log("Received title:", title);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send(`
    <h1>Hello from Express</h1>
    <br>
    <a href="/add-product"><button>Go to Product</button></a>
  `);
});

app.listen(PORT);

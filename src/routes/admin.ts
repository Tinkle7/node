import express from "express";
import path from "path";

import rootDir from "../util/path";

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.render("add-product");
});

router.post("/add-product", (req, res, next) => {
  const title = req.body.title;
  products.push({ title });
  res.redirect("/");
});

export default { router, products };

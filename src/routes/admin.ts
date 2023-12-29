import express from "express";
import path from "path";

import rootDir from "../util/path";

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  const title = req.body.title;
  products.push({ title });
  res.redirect("/");
});

export default { router, products };

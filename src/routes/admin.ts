import express from "express";
import path from "path";

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  const title = req.body.title;
  console.log("Received title:", title);
  res.redirect("/");
});

export default router;

import express from "express";
import path from "path";

import rootDir from "../util/path";
import { adminRoutes } from ".";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("shop", { prods: adminRoutes.products });
});

export default { router };

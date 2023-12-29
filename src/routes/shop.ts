import express from "express";
import path from "path";

import rootDir from "../util/path";
import { adminRoutes } from ".";

const router = express.Router();

router.get("/", (req, res, next) => {
  console.log(adminRoutes.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

export default { router };

import bodyParser from "body-parser";
import express from "express";
import path from "path";

import rootDir from "./util/path";

import { adminRoutes, shopRoutes } from "./routes";

require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(PORT);

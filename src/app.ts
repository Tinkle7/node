import bodyParser from "body-parser";
import express from "express";

import { adminRoutes, shopRoutes } from "./routes";
import path from "path";

require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(PORT);

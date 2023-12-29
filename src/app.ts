import bodyParser from "body-parser";
import express from "express";

import { adminRoutes, shopRoutes } from "./routes";

require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(PORT);

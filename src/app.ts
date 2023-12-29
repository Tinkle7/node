import bodyParser from "body-parser";
import express from "express";

import { adminRoutes, shopRoutes } from "./routes";

require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(PORT);

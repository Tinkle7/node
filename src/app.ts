import bodyParser from "body-parser";
import express from "express";
import path from "path";

import rootDir from "./util/path";

import { adminRoutes, shopRoutes } from "./routes";
import error from "./controllers/error";

require("dotenv").config();

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "..", "public")));

app.use("/admin", adminRoutes.router);
app.use(shopRoutes.router);

app.use(error.handle404);

app.listen(PORT);

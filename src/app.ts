import http from "http";
import express from "express";

require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware_1");
  next(); // this allows to continue to the next function
});

app.use((req, res, next) => {
  console.log("in the middleware_2");
  res.send("<h1>Hello from express</h1>");
});

const server = http.createServer(app);

const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

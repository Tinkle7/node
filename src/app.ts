import http from "http";
import express from "express";

require("dotenv").config();

const app = express();

const server = http.createServer(app);

const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

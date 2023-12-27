"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestHandler = void 0;
const fs_1 = __importDefault(require("fs"));
const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === "/" && method === "GET") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<html>");
        response.write("<head><title>Enter Message</title></head>");
        response.write("<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>submit</button></form></body>");
        response.write("</html>");
        return response.end(); // if we not return it will call the down code also
    }
    if (url === "/message" && method === "POST") {
        //on allow us to lissten to certain event
        const body = [];
        request.on("data", (chunk) => {
            //   console.log(chunk);
            body.push(chunk);
        });
        return request.on("end", () => {
            const parseBody = Buffer.concat(body).toString();
            //   console.log(parseBody);
            const message = parseBody.split("=")[1];
            //   fs.writeFileSync("message.txt", message);
            fs_1.default.writeFile("message.txt", message, (err) => {
                response.writeHead(302, { Location: "/" });
                return response.end();
            });
        });
        // response.statusCode = 302;
        // response.setHeader("Location", "/");
        // same as response.writeHead(302, { Location: "/" });
        // response.writeHead(302, { Location: "/" });  //if  fs.writeFileSync("message.txt", message)
        // return response.end();
    }
};
exports.requestHandler = requestHandler;

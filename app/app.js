// const fs = require("fs");

// fs.writeFileSync("please.txt", "use client data");
// console.log("Hello, Node.js!");

// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { contentType: "text/plain" });
//   res.end("welcom to our server");
// });

// server.listen(3000, () => console.log("hi bro 3000 port"));

const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body style='height:100vh ; overflow:hidden;'>
        <h1 style=' height:100vh ; overflow:hidden; color:blue;background-color:white; display:flex ;justify-content:center;align-items:center;height:100vh;'>hello bro you are at my server </h1>
    </body>
    </html>`,
      );

//   process.exit();
});

server.listen(1000);
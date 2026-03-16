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
    "<h1 style='color:blue;background-color:white; display:flex ;justify-content:center;align-items:center;height:100vh;'>hello bro your are at my server </h1>",
  );

//   process.exit();
});

server.listen(1000, console.log("hi iam in 1000 port"));

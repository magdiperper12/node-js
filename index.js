const http = require("http");
const fs = require("fs");


// Browser → Request → Server
// Server → Processing → Response
// Browser → Render


const server = http.createServer((req, res) => {
    console.log(req.headers)

const method = req.method;
const url = req.url;

if(url==='/'){
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action = "/message"
 method="POST">
 <input type="text" name="message_data" placeholder="Enter your message">
 <button type="submit">Submit</button>
 </form>    </body>
    </html>`
    
);
return res.end();
}if(url==='/message'&& method === "POST"){
 
        fs.writeFileSync("message.txt", "hello bro you are at my server at message page")
        res.statusCode = 302
        res.setHeader("Location", "/")
        return res.end()
    
}else{
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <body>
        <h1>..hello bro you are at my server at not found page   </h1>
    </body>
    </html>`
    );
    return res.end();
}
});



server.listen(3000);











// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     console.log(req.headers)
// method = req.method;

// const url = req.url;

// if(url==='/'){
//     res.write(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <form action = "/message" method="POST">
//  <input type="text" name="message_data" placeholder="Enter your message">
//  <button type="submit">Submit</button>
//  </form> 
//  <h1>   hello bro you are at my server at home page</h1>
//     </body>
//     </html>`
//     )
//     return res.end();
// }
// if(url==='/message' && method === "POST"){
 
//         fs.writeFileSync("message.txt", "hello bro you are at my server at message page")
//         res.statusCode = 302
//         res.setHeader("Location", "/")
//         return res.end() 
// }
// res.setHeader("Content-Type", "text/html");
// res.write("<html>");
// res.write("<head><title>My First Page</title></head>");
// res.write("<body><h1>Hello World</h1></body>");
// res.write("</html>");
// res.end();}
// );

// server.listen(3000);






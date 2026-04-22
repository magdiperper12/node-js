const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {

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
            method="POST" style="display: flex; flex-direction: column; gap: 10px;">
                <input type="text" name="message_data" placeholder="Enter your message" required style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
                <input type="text" name="name" placeholder="Enter your name" required style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
                <input type="text" name="skills" placeholder="Enter your skills" required style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
                <button type="submit" style="padding: 10px; border: 1px solid #ccc; border-radius: 5px;">Submit</button>
            </form>   
        </body>
    </html>`
    
);
return res.end();
}if(url==='/message'&& method === "POST"){
    const body = [];
    req.on("data",chunck => {
        body.push(chunck);
    });
    req.on("end",()=>{
        const dataParsed = Buffer.concat(body).toString();
        console.log(dataParsed);
        // const messageOfAll = dataParsed.split("=")[1];
        const messageOfAll = new URLSearchParams(dataParsed);
        const measage = messageOfAll.get("message_data") + " " + messageOfAll.get("name") + " " + messageOfAll.get("skills");
        console.log(measage);
        fs.writeFile("end/message.txt",measage, (error)=>{
            if(error){
                res.statusCode = 302
                res.setHeader("Location", "/error")
                return res.end()
            }
            res.statusCode = 302
            res.setHeader("Location", "/success")
            return res.end()
           
        })  
    })
}
else if(url ==="/error"){
    fs.readFile("end/error.txt", (err, data) => {
        if(err){
            console.log(err);
        }
        res.end(data);
    });
}

else if(url ==="/success"){
    res.writeHead(200,{"content-type":"text/html"})
    fs.readFile("end/success.txt",(err,data)=>{
        if(err){
            console.log(err);
        }
        res.end(data)
    })
}

else{
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


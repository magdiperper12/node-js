const http = require("http");

const {formSection} =require("./routes/routes");
const {texting} = require("./routes/routes");
console.log(texting());
const server = http.createServer(formSection);

server.listen(3000);
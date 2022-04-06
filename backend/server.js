const express = require("express");
const path = require("path");
const app = express(); // express is egy föggvény és ez lefut, és objektum jön vissza

function getFunction(request, response){
    response.sendFile(path.join(`${__dirname}/../frontend/index.html`));
}

app.get("/", getFunction);
app.use("/pub", express.static(`${__dirname}/../frontend/public`));

const port = 9000;
const ipAddress = `http://127.0.0.1:${port}`
app.listen(port, () => {
    console.log(ipAddress)
});

// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const serverFunc = (req, res) => {

// 	const errorHTML = `Rise your gaze to the sky than a bit back to the URL bar and check that link again`;
    
// 	let filePath = path.resolve(`${__dirname}/../frontend${req.url}`);
    
// 	fs.access(filePath, fs.constants.R_OK, (error) => {
//         if(error){
//             res.statusCode = 500
//             res.end(errorHTML);
//         }else{
//             if(fs.statSync(filePath).isDirectory()) {
//                 filePath += '/index.html';
//             }
//             fs.readFile(filePath, (err, data) => {
//                 if(err) {
//                     res.statusCode = 500;
//                     res.end(errorHTML);
//                 } else {
//                     console.log("az index.html redben kiszolgálódott");
//                     res.end(data);
//                 }
//             });
//         }
// 	});
// };

// const server = http.createServer(serverFunc);

// const port = 9000;
// const ipAddress = "127.0.0.1";
// const listenFunc = () => {
//     const addr = server.address();
//     console.log(`http://${addr.address}:${addr.port}`);
//     console.log(`Nincs más hátra mint előre.`)
// };

// server.listen(port, ipAddress, listenFunc);
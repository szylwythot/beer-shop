const express = require("express");
const path = require("path");
const app = express(); // express is egy függvény és ez lefut, és objektum jön vissza

function getFunction(request, response){
    response.sendFile(path.join(`${__dirname}/../index.html`));
}

app.get("/", getFunction);
app.use("/frontend/public", express.static(`${__dirname}/../frontend/public`));

const port = 9000;
const ipAddress = `http://127.0.0.1:${port}`
app.listen(port, () => {
    console.log(ipAddress)
});
const express = require("express");
const cors = require("cors");
const fs = require("fs");

// autoload apis
const apiNames = fs
  .readdirSync(__dirname, { withFileTypes: true })
  .filter((dir) => dir.isDirectory())
  .map((dir) => dir.name);

const app = express();

app.use(
  cors({
    origin: "*"
  })
);

//create a server object:
app.get("/", function (req, res) {
  res.write("Hello World!..."); //write a response to the client
  res.end(); //end the response
});

for (const apiName of apiNames) {
  const api = require(`./${apiName}`);
  app.use(`/${apiName}`, api);
}

app.listen(8080, function () {
  console.log("server running on 8080");
});

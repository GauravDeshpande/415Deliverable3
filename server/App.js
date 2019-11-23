var simulatorEngine = require("./Model.js");
var Engine = simulatorEngine.simulatorEngine;
var express = require("express");
var bodyParser = require("body-parser");
const port = 3000;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", express.static("../public"));
app.post("/simulate", function(req, res) {
  res.send({ data: Engine(req.body) });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

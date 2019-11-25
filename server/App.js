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
  if (req.body.cycle === "N_S") {
    res.send({
      cycle: req.body.cycle,
      straight_A: Engine(req.body.NBstraight),
      left_A: Engine(req.body.NBleft),
      straight_B: Engine(req.body.SBstraight),
      left_B: Engine(req.body.SBleft),
      right_A: Engine(req.body.NBright),
      right_B: Engine(req.body.SBright)
    });
  } else {
    console.log(req.body);
    res.send({
      cycle: req.body.cycle,
      straight_A: Engine(req.body.WBstraight),
      left_A: Engine(req.body.WBleft),
      straight_B: Engine(req.body.EBstraight),
      left_B: Engine(req.body.EBleft),
      right_A: Engine(req.body.WBright),
      right_B: Engine(req.body.EBright)
    });
  }
});
app.listen(port, () => console.log(`listening on port ${port}!`));

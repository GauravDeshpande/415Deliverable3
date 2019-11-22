window.onload = function() {
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("intersectionPic");
  ctx.drawImage(img, 0, 50);
  // ctx.fillText("11",350,50); //n out
  // ctx.fillText("12",350,620);//n in

  // // ctx.fillText("13",25,300);//w out
  // ctx.fillText("14",25,380);//e in
  // // ctx.fillText("15",600,380);//e out
  // ctx.fillText("16",270,620);//s
  // ctx.fillText("17",270,50);//s in
};
function northBoundIn() {
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(300, 610, 350, 620);
  var x = document.getElementById("north-in").value;
  ctx.fillText(x, 350, 620); //n in
}
function southBoundIn() {
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(250, 40, 50, 12);
  var x = document.getElementById("south-in").value;
  ctx.fillText(x, 270, 50); //s in
}
function eastBoundIn() {
  console.log("here");
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(25, 350, 17, 50);
  var x = document.getElementById("east-in").value;
  ctx.fillText(x, 25, 380); //e in
}
function westBoundIn() {
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(600, 275, 20, 50);
  var x = document.getElementById("west-in").value;
  ctx.fillText(x, 600, 300); //w in
}

function placeBlockage() {}
function collectAllinputs() {
  //collect feature inputs
  let weatherSelect = document.getElementById("weather");
  let daySelect = document.getElementById("day-type");
  let timeSelect = document.getElementById("time");
  let blockSelect = document.getElementById("blockage");

  let weatherValue =
    weatherSelect.options[weatherSelect.selectedIndex].attributes.modifier
      .value;
  let dayValue =
    daySelect.options[daySelect.selectedIndex].attributes.modifier.value;
  let timeValue =
    timeSelect.options[timeSelect.selectedIndex].attributes.modifier.value;
  let blockageValue = blockSelect.options[blockSelect.selectedIndex].value;
  //collect field inputs

  let NB_in = document.getElementById("north-in").value;
  let NB_l = document.getElementById("north-left").value;
  let NB_s = document.getElementById("north-straight").value;

  let SB_in = document.getElementById("south-in").value;
  let SB_l = document.getElementById("south-left").value;
  let SB_s = document.getElementById("south-straight").value;

  let EB_in = document.getElementById("east-in").value;
  let EB_l = document.getElementById("east-left").value;
  let EB_s = document.getElementById("east-straight").value;

  let WB_in = document.getElementById("west-in").value;
  let WB_l = document.getElementById("west-left").value;
  let WB_s = document.getElementById("west-straight").value;

  let cpc = document.getElementById("cpc").value;
  let gcl = document.getElementById("gcl").value;

  modelInputObj = {
    weather: weatherValue,
    day: dayValue,
    time: timeValue,
    blockage: blockageValue,
    NB: { in: NB_in, straight: NB_s, left: NB_l },
    SB: { in: SB_in, straight: SB_s, left: SB_l },
    EB: { in: EB_in, straight: EB_s, left: EB_l },
    WB: { in: WB_in, straight: WB_s, left: WB_l },
    cpc: cpc,
    gcl: gcl
  };
  console.log(modelInputObj);
  document.getElementById("spinner").style.visibility = "visible";
  document.getElementById("cycle").style.visibility = "visible";
  document.getElementById("cycle").innerHTML =
    "simulating North/South Cycle for " + gcl + " seconds";
  setTimeout(function() {
    document.getElementById("spinner").style.visibility = "hidden";
    document.getElementById("cycle").innerHTML = "Some Text";
    document.getElementById("cycle").style.visibility = "hidden";
  }, 3000);
}

function retrieveModelOutput(obj) {
  let hyperRateModifier = obj.weatherValue;
}
var obj = {
  carsPerSec: 5,
  hyperRate: 0.4,
  greenCycleLength: 20,
  carInputAmount: 100,
  leftPercent: 0.2,
  straightPercent: 0.8
};

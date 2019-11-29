NB_OUT = 0;
NB_IN = 0;
SB_OUT = 0;
SB_IN = 0;
EB_OUT = 0;
EB_IN = 0;
WB_OUT = 0;
WB_IN = 0;
IN_TOTAL = 0;
CYCLE_TOTAL = 0;
window.onload = function() {
  this.draw();
};
//Action Listeners For UI/////////////
function northBoundIn(value, populateExample) {
  if (!isNaN(value)) {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(350, 610, 50, 17);
    if (value > 0 && !populateExample) {
      ctx.fillStyle = "#FF0000";
    } else {
      ctx.fillStyle = "#050505";
    }
    ctx.fillText(value, 350, 620); //n in
    ctx.fillStyle = "#050505";
  } else {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(350, 610, 50, 17);
    var x = document.getElementById("north-in").value;
    ctx.fillText(x, 350, 620); //n in
  }
}
function southBoundIn(value, populateExample) {
  if (!isNaN(value)) {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(250, 40, 50, 12);
    if (value > 0 && !populateExample) {
      ctx.fillStyle = "#FF0000";
    } else {
      ctx.fillStyle = "#050505";
    }
    ctx.fillText(value, 270, 50); //s in
    ctx.fillStyle = "#050505";
  } else {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(250, 40, 50, 12);
    var x = document.getElementById("south-in").value;
    ctx.fillText(x, 270, 50); //s in
  }
}
function eastBoundIn(value, populateExample) {
  if (!isNaN(value)) {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(25, 350, 17, 50);
    if (value > 0 && !populateExample) {
      ctx.fillStyle = "#FF0000";
    } else {
      ctx.fillStyle = "#050505";
    }
    ctx.fillText(value, 25, 380); //e in
    ctx.fillStyle = "#050505";
  } else {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(25, 350, 17, 50);
    var x = document.getElementById("east-in").value;
    ctx.fillText(x, 25, 380); //e in
  }
}
function westBoundIn(value, populateExample) {
  if (!isNaN(value)) {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(600, 275, 20, 50);
    if (value > 0 && !populateExample) {
      ctx.fillStyle = "#FF0000";
    } else {
      ctx.fillStyle = "#050505";
    }
    ctx.fillText(value, 600, 300); //w in
    ctx.fillStyle = "#050505";
  } else {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(600, 275, 20, 50);
    var x = document.getElementById("west-in").value;
    ctx.fillText(x, 600, 300); //w in
  }
}
function northBoundOut(value) {
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(340, 38, 50, 20);
  ctx.fillText(value, 350, 50); //n out
}
function eastBoundOut(value) {
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(25, 280, 17, 50);
  ctx.fillText(value, 25, 300); //e out
}
function southBoundOut(value) {
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(260, 610, 50, 20);
  ctx.fillText(value, 270, 620); //n in
}
function westBoundOut(value) {
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  ctx.clearRect(600, 350, 30, 50);
  ctx.fillText(value, 600, 375); //w out
}
function placeBlockage() {
  let blockSelect = document.getElementById("blockage");
  let location = blockSelect.options[blockSelect.selectedIndex].value;
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#2e3138";
  ctx.fillRect(375, 150, 20, 15);
  ctx.fillRect(240, 500, 20, 15);
  ctx.fillRect(140, 255, 20, 15);
  ctx.fillRect(475, 390, 20, 15);
  if (location == "NB") {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(375, 150, 20, 15);
    ctx.fillStyle = "#050505";
    return;
  }
  if (location == "SB") {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(240, 500, 20, 15);
    ctx.fillStyle = "#050505";
    return;
  }
  if (location == "WB") {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(140, 255, 20, 15);
    ctx.fillStyle = "#050505";
    return;
  }
  if (location == "EB") {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(475, 390, 20, 15);
    ctx.fillStyle = "#050505";
    return;
  }
  if (location == "") {
    ctx.fillStyle = "#2e3138";
    ctx.fillRect(375, 150, 20, 15);
    ctx.fillRect(240, 500, 20, 15);
    ctx.fillRect(140, 255, 20, 15);
    ctx.fillRect(475, 390, 20, 15);
    ctx.fillStyle = "#050505";
    return;
  }
}
function draw() {
  var c = document.getElementById("intersectionCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("intersectionPic");
  ctx.drawImage(img, 0, 50);
}
//End Action Listeners for UI

//Entry point For Running Simulatior
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
  //collect  form field inputs
  let NB_in = document.getElementById("north-in").value;
  let NB_l = document.getElementById("north-left").value;
  let NB_s = document.getElementById("north-straight").value;
  let NB_r = document.getElementById("north-right").value;

  let SB_in = document.getElementById("south-in").value;
  let SB_l = document.getElementById("south-left").value;
  let SB_s = document.getElementById("south-straight").value;
  let SB_r = document.getElementById("south-right").value;

  let EB_in = document.getElementById("east-in").value;
  let EB_l = document.getElementById("east-left").value;
  let EB_s = document.getElementById("east-straight").value;
  let EB_r = document.getElementById("east-right").value;

  let WB_in = document.getElementById("west-in").value;
  let WB_l = document.getElementById("west-left").value;
  let WB_s = document.getElementById("west-straight").value;
  let WB_r = document.getElementById("west-right").value;

  let cpc = document.getElementById("cpc").value;
  let gcl = document.getElementById("gcl").value;
  let lal = document.getElementById("lt_len").value;
  let cpc2 = document.getElementById("cpc-2").value;
  let gcl2 = document.getElementById("gcl-2").value;
  let lal2 = document.getElementById("lt_len-2").value;

  //calculate totals before model
  IN_TOTAL =
    parseInt(WB_in) + parseInt(EB_in) + parseInt(NB_in) + parseInt(SB_in);
  console.log("TOTAL:::: " + IN_TOTAL);
  CYCLE_TOTAL = parseInt(gcl) + parseInt(gcl2) + parseInt(lal) + parseInt(lal2);
  if (!IN_TOTAL) {
    alert("no vehicle inputs found");
    return;
  }

  //build obj parameter for cycle inputs
  modelInputObj = {
    weather: weatherValue,
    day: dayValue,
    time: timeValue,
    blockage: blockageValue,
    NB: { in: NB_in, straight: NB_s, left: NB_l, right: NB_r },
    SB: { in: SB_in, straight: SB_s, left: SB_l, right: SB_r },
    EB: { in: EB_in, straight: EB_s, left: EB_l, right: EB_r },
    WB: { in: WB_in, straight: WB_s, left: WB_l, right: WB_r },
    cpc: cpc,
    gcl: gcl,
    lal: lal,
    cpc2: cpc2,
    gcl2: gcl2,
    lal2: lal2
  };
  //THIS IS THE SPINNER
  document.getElementById("spinner").style.visibility = "visible";
  document.getElementById("cycle").style.visibility = "visible";
  document.getElementById("cycle").innerHTML = "simulating state 1 & 2";
  setTimeout(function() {
    document.getElementById("spinner").style.visibility = "hidden";
    document.getElementById("cycle").innerHTML = "Some Text";
    document.getElementById("cycle").style.visibility = "hidden";
    retrieveNorthSouthCylce(modelInputObj); //Calculate the North South Cycle

    document.getElementById("spinner").style.visibility = "visible";
    document.getElementById("cycle").style.visibility = "visible";
    document.getElementById("cycle").innerHTML = "simulating state 3 & 4 ";
    setTimeout(function() {
      document.getElementById("spinner").style.visibility = "hidden";
      document.getElementById("cycle").innerHTML = "Some Text";
      document.getElementById("cycle").style.visibility = "hidden";
      retrieveEastWestCylce(modelInputObj); //Calculate the East West Cycle
    }, 3000);
  }, 3000);
}

function retrieveNorthSouthCylce(obj) {
  //fetch request body to pass to server
  let requestBody = {
    cycle: "N_S",
    NBstraight: {},
    NBleft: {},
    NBright: {},
    SBstraight: {},
    SBleft: {},
    SBRight: {}
  };
  //build north bound inputs
  if (obj.blockage == "NB") {
    requestBody.NBstraight = {
      carsPerSec: obj.cpc - 1 - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.NB.in * 0.01 * obj.NB.straight,
      greenCycleLength: obj.gcl
    };
  } else {
    requestBody.NBstraight = {
      carsPerSec: obj.cpc - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.NB.in * 0.01 * obj.NB.straight,
      greenCycleLength: obj.gcl
    };
  }
  requestBody.NBleft = {
    carsPerSec: obj.cpc - 1 - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.NB.in * 0.01 * obj.NB.left,
    greenCycleLength: obj.lal
  };
  requestBody.NBright = {
    carsPerSec: obj.cpc - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.NB.in * 0.01 * obj.NB.right,
    greenCycleLength: obj.gcl
  };

  //build south bound inputs
  if (obj.blockage == "SB") {
    requestBody.SBstraight = {
      carsPerSec: obj.cpc - 1 - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.SB.in * 0.01 * obj.SB.straight,
      greenCycleLength: obj.gcl
    };
  } else {
    requestBody.SBstraight = {
      carsPerSec: obj.cpc - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.SB.in * 0.01 * obj.SB.straight,
      greenCycleLength: obj.gcl
    };
  }
  requestBody.SBleft = {
    carsPerSec: obj.cpc - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.SB.in * 0.01 * obj.SB.left,
    greenCycleLength: obj.lal
  };

  requestBody.SBright = {
    carsPerSec: obj.cpc - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.SB.in * 0.01 * obj.SB.right,
    greenCycleLength: obj.gcl
  };

  fetchData(requestBody)
    .then(function(res) {
      console.log(res);
      populateOutPuts(res);
    })
    .catch(function(error) {
      console.log(
        "There was an error retrieving your request from the API " + error
      );
    });
}
function retrieveEastWestCylce(obj) {
  //fetch request body to pass to server
  let requestBody = {
    cycle: "E_W",
    EBstraight: {},
    EBright: {},
    EBleft: {},
    WBstraight: {},
    WBleft: {},
    WBright: {}
  };

  //build west bound inputs
  if (obj.blockage == "WB") {
    requestBody.WBstraight = {
      carsPerSec: obj.cpc2 - 1 - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.WB.in * 0.01 * obj.WB.straight,
      greenCycleLength: obj.gcl2
    };
  } else {
    requestBody.WBstraight = {
      carsPerSec: obj.cpc2 - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.WB.in * 0.01 * obj.WB.straight,
      greenCycleLength: obj.gcl2
    };
  }
  requestBody.WBleft = {
    carsPerSec: obj.cpc2 - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.WB.in * 0.01 * obj.WB.left,
    greenCycleLength: obj.lal2
  };
  requestBody.WBright = {
    carsPerSec: obj.cpc2 - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.WB.in * 0.01 * obj.WB.right,
    greenCycleLength: obj.gcl2
  };
  //build east bound inputs
  if (obj.blockage == "EB") {
    requestBody.EBstraight = {
      carsPerSec: obj.cpc2 - 1 - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.EB.in * 0.01 * obj.EB.straight,
      greenCycleLength: obj.gcl2
    };
  } else {
    requestBody.EBstraight = {
      carsPerSec: obj.cpc2 - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.EB.in * 0.01 * obj.EB.straight,
      greenCycleLength: obj.gcl2
    };
  }
  requestBody.EBleft = {
    carsPerSec: obj.cpc2 - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.EB.in * 0.01 * obj.EB.left,
    greenCycleLength: obj.lal2
  };
  requestBody.EBright = {
    carsPerSec: obj.cpc2 - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.EB.in * 0.01 * obj.EB.right,
    greenCycleLength: obj.gcl2
  };
  fetchData(requestBody)
    .then(function(res) {
      console.log(res);
      populateOutPuts(res);
    })
    .catch(function(error) {
      console.log(
        "There was an error retrieving your request from the API " + error
      );
    });
}
//Display Results From Model on the Screen.
function populateOutPuts(obj) {
  if (obj.cycle === "N_S") {
    NB_OUT = obj.straight_A.carsThrough;
    EB_OUT = obj.right_B.carsThrough + obj.left_A.carsThrough;
    SB_OUT = obj.straight_B.carsThrough;
    WB_OUT = obj.right_A.carsThrough + obj.left_B.carsThrough;
    NB_IN =
      obj.straight_A.carsStopped +
      obj.left_A.carsStopped +
      obj.right_A.carsStopped;
    SB_IN =
      obj.straight_B.carsStopped +
      obj.left_B.carsStopped +
      obj.right_B.carsStopped;
    northBoundOut(NB_OUT);
    southBoundOut(SB_OUT);
    eastBoundOut(EB_OUT);
    westBoundOut(WB_OUT);
    northBoundIn(NB_IN);
    southBoundIn(SB_IN);
  }
  if (obj.cycle == "E_W") {
    NB_OUT = obj.right_A.carsThrough + obj.left_B.carsThrough + NB_OUT;
    EB_OUT = obj.straight_A.carsThrough + EB_OUT;
    SB_OUT = obj.right_B.carsThrough + obj.left_A.carsThrough + SB_OUT;
    WB_OUT = obj.straight_B.carsThrough + WB_OUT;
    WB_IN =
      obj.straight_A.carsStopped +
      obj.left_A.carsStopped +
      obj.right_A.carsStopped +
      WB_IN;
    EB_IN =
      obj.straight_B.carsStopped +
      obj.left_B.carsStopped +
      obj.right_B.carsStopped +
      EB_IN;
    westBoundOut(WB_OUT);
    southBoundOut(SB_OUT);
    eastBoundOut(EB_OUT);
    northBoundOut(NB_OUT);
    westBoundIn(WB_IN);
    eastBoundIn(EB_IN);

    let totalOut = NB_OUT + SB_OUT + EB_OUT + WB_OUT;
    let totalIn = NB_IN + SB_IN + EB_IN + WB_IN;
    document.getElementById("tables").style.display = "";
    document.getElementById("tables").style.visibility = "visible";
    document
      .getElementById("run-button")
      .setAttribute("onclick", "window.location.reload();");
    document.getElementById("run-button").innerHTML =
      "Clear And Create New Simulation";
    document.getElementById("summary-out").innerHTML = totalOut;
    document.getElementById("summary-left").innerHTML = totalIn;
    document.getElementById("summary-jam").innerHTML = totalIn > 0;
    document.getElementById("cycle-length").innerHTML = CYCLE_TOTAL;
    document.getElementById("error").innerHTML = totalOut + totalIn - IN_TOTAL;
  }
}
//Loads Examples for the user
function loadExample(number) {
  if (number == 1) {
    document.getElementById("north-in").value = 100;
    northBoundIn(100, true);
    document.getElementById("north-left").value = 10;
    document.getElementById("north-straight").value = 80;
    document.getElementById("north-right").value = 10;

    document.getElementById("south-in").value = 80;
    southBoundIn(80, true);
    document.getElementById("south-left").value = 25;
    document.getElementById("south-straight").value = 50;
    document.getElementById("south-right").value = 25;

    document.getElementById("east-in").value = 90;
    eastBoundIn(90, true);
    document.getElementById("east-left").value = 45;
    document.getElementById("east-straight").value = 45;
    document.getElementById("east-right").value = 10;

    document.getElementById("west-in").value = 50;
    westBoundIn(50, true);
    document.getElementById("west-left").value = 10;
    document.getElementById("west-straight").value = 60;
    WB_r = document.getElementById("west-right").value = 30;

    document.getElementById("cpc").value = 5;
    document.getElementById("gcl").value = 20;
    document.getElementById("lt_len").value = 10;
    document.getElementById("cpc-2").value = 5;
    document.getElementById("gcl-2").value = 25;
    document.getElementById("lt_len-2").value = 12;
  } else if (number == 2) {
    document.getElementById("north-in").value = 95;
    northBoundIn(95, true);
    document.getElementById("north-left").value = 20;
    document.getElementById("north-straight").value = 60;
    document.getElementById("north-right").value = 20;

    document.getElementById("south-in").value = 75;
    southBoundIn(75, true);
    document.getElementById("south-left").value = 25;
    document.getElementById("south-straight").value = 55;
    document.getElementById("south-right").value = 20;

    document.getElementById("east-in").value = 110;
    eastBoundIn(110, true);
    document.getElementById("east-left").value = 50;
    document.getElementById("east-straight").value = 40;
    document.getElementById("east-right").value = 10;

    document.getElementById("west-in").value = 60;
    westBoundIn(60, true);
    document.getElementById("west-left").value = 65;
    document.getElementById("west-straight").value = 25;
    WB_r = document.getElementById("west-right").value = 10;

    document.getElementById("cpc").value = 4;
    document.getElementById("gcl").value = 23;
    document.getElementById("lt_len").value = 8;
    document.getElementById("cpc-2").value = 3;
    document.getElementById("gcl-2").value = 28;
    document.getElementById("lt_len-2").value = 10;
  }
}
async function fetchData(obj) {
  var response = await fetch("http://localhost:3000/simulate", {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(obj)
  });
  var data = await response.json();
  return data;
}

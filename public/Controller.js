NB_OUT = 0;
NB_IN = 0;
SB_OUT = 0;
SB_IN = 0;
EB_OUT = 0;
EB_IN = 0;
WB_OUT = 0;
WB_IN = 0;
window.onload = function() {
  this.draw();
};
function northBoundIn(value) {
  if (!isNaN(value)) {
    console.log("should value");
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(350, 610, 50, 17);
    if (value > 0) {
      ctx.fillStyle = "#FF0000";
    }
    ctx.fillText(value, 350, 620); //n in
    ctx.fillStyle = "#050505";
  } else {
    console.log("from dom values");
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(350, 610, 50, 17);
    var x = document.getElementById("north-in").value;
    ctx.fillText(x, 350, 620); //n in
  }
}
function southBoundIn(value) {
  if (!isNaN(value)) {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(250, 40, 50, 12);
    if (value > 0) {
      ctx.fillStyle = "#FF0000";
    }
    ctx.fillText(value + SB_IN, 270, 50); //s in
    ctx.fillStyle = "#050505";
  } else {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(250, 40, 50, 12);
    var x = document.getElementById("south-in").value;
    ctx.fillText(x, 270, 50); //s in
  }
}
function eastBoundIn(value) {
  if (!isNaN(value)) {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(25, 350, 17, 50);
    if (value > 0) {
      ctx.fillStyle = "#FF0000";
    }
    ctx.fillText(value + EB_IN, 25, 380); //e in
    ctx.fillStyle = "#050505";
  } else {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(25, 350, 17, 50);
    var x = document.getElementById("east-in").value;
    ctx.fillText(x, 25, 380); //e in
  }
}
function westBoundIn(value) {
  if (!isNaN(value)) {
    var c = document.getElementById("intersectionCanvas");
    var ctx = c.getContext("2d");
    ctx.clearRect(600, 275, 20, 50);
    if (value > 0) {
      ctx.fillStyle = "#FF0000";
    }
    ctx.fillText(value + WB_IN, 600, 300); //w in
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
  let NB_r = document.getElementById("north-right").value;

  let SB_in = document.getElementById("south-in").value;
  let SB_l = document.getElementById("south-left").value;
  let SB_s = document.getElementById("south-straight").value;
  let SB_r = document.getElementById("north-right").value;

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
    lal: lal
  };
  // console.log(modelInputObj);
  // retrieveNorthSouthCylce(modelInputObj);
  // retrieveEastWestCylce(modelInputObj);
  document.getElementById("spinner").style.visibility = "visible";
  document.getElementById("cycle").style.visibility = "visible";
  document.getElementById("cycle").innerHTML =
    "simulating North/South Cycle for " + gcl + " seconds";
  setTimeout(function() {
    document.getElementById("spinner").style.visibility = "hidden";
    document.getElementById("cycle").innerHTML = "Some Text";
    document.getElementById("cycle").style.visibility = "hidden";
    retrieveNorthSouthCylce(modelInputObj);

    document.getElementById("spinner").style.visibility = "visible";
    document.getElementById("cycle").style.visibility = "visible";
    document.getElementById("cycle").innerHTML =
      "simulating East/West Cycle for " + gcl + " seconds";
    setTimeout(function() {
      document.getElementById("spinner").style.visibility = "hidden";
      document.getElementById("cycle").innerHTML = "Some Text";
      document.getElementById("cycle").style.visibility = "hidden";
      retrieveEastWestCylce(modelInputObj);
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
      carsPerSec: obj.cpc - 1 - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.WB.in * 0.01 * obj.WB.straight,
      greenCycleLength: obj.gcl
    };
  } else {
    requestBody.WBstraight = {
      carsPerSec: obj.cpc - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.WB.in * 0.01 * obj.WB.straight,
      greenCycleLength: obj.gcl
    };
  }
  requestBody.WBleft = {
    carsPerSec: obj.cpc - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.WB.in * 0.01 * obj.WB.left,
    greenCycleLength: obj.lal
  };
  requestBody.WBright = {
    carsPerSec: obj.cpc - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.WB.in * 0.01 * obj.WB.right,
    greenCycleLength: obj.gcl
  };
  //build east bound inputs
  if (obj.blockage == "EB") {
    requestBody.EBstraight = {
      carsPerSec: obj.cpc - 1 - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.EB.in * 0.01 * obj.EB.straight,
      greenCycleLength: obj.gcl
    };
  } else {
    requestBody.EBstraight = {
      carsPerSec: obj.cpc - obj.weather,
      hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
      carInputAmount: obj.EB.in * 0.01 * obj.EB.straight,
      greenCycleLength: obj.gcl
    };
  }
  requestBody.EBleft = {
    carsPerSec: obj.cpc - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.EB.in * 0.01 * obj.EB.left,
    greenCycleLength: obj.lal
  };
  requestBody.EBright = {
    carsPerSec: obj.cpc - obj.weather,
    hyperRate: parseFloat(obj.day) + parseFloat(obj.time),
    carInputAmount: obj.EB.in * 0.01 * obj.EB.right,
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

function populateOutPuts(obj) {
  if (obj.cycle === "N_S") {
    northBoundOut(obj.straight_A.carsThrough);
    southBoundOut(obj.straight_B.carsThrough);
    eastBoundOut(obj.right_B.carsThrough + obj.left_A.carsThrough);
    westBoundOut(obj.right_A.carsThrough + obj.left_B.carsThrough);
    northBoundIn(
      obj.straight_A.carsStopped +
        obj.left_A.carsStopped +
        obj.right_A.carsStopped
    );
    southBoundIn(
      obj.straight_B.carsStopped +
        obj.left_B.carsStopped +
        obj.right_B.carsStopped
    );
    NB_OUT = obj.straight_A.carsThrough;
    EB_OUT = obj.right_B.carsThrough + obj.left_A.carsThrough;
    SB_OUT = obj.straight_B.carsThrough;
    WB_OUT = obj.right_A.carsThrough + obj.left_B.carsThrough;
    NB_IN =
      obj.straight_A.carsStopped +
      obj.left_A.carsStopped +
      obj.right_B.carsStopped;
    SB_IN =
      obj.straight_B.carsStopped +
      obj.left_B.carsStopped +
      obj.right_B.carsStopped;
  }
  if (obj.cycle == "E_W") {
    westBoundOut(obj.straight_B.carsThrough + WB_OUT);
    southBoundOut(obj.right_B.carsThrough + obj.left_A.carsThrough + SB_OUT);
    eastBoundOut(obj.straight_A.carsThrough + EB_OUT);
    northBoundOut(obj.right_A.carsThrough + obj.left_B.carsThrough + NB_OUT);
    westBoundIn(
      obj.straight_A.carsStopped +
        obj.left_A.carsStopped +
        obj.right_A.carsStopped +
        WB_IN
    );
    eastBoundIn(
      obj.straight_B.carsStopped +
        obj.left_B.carsStopped +
        obj.right_B.carsStopped +
        EB_IN
    );
    NB_OUT = obj.right_A.carsThrough + obj.left_B.carsThrough + NB_OUT;
    EB_OUT = obj.straight_A.carsThrough + EB_OUT;
    WB_OUT = SB_OUT = obj.right_B.carsThrough + obj.left_A.carsThrough + SB_OUT;
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

    document.getElementById("form").remove();
    document.getElementById("tables").style.visibility = "visible";
    document.getElementById("summary-out").innerHTML =
      NB_OUT + SB_OUT + EB_OUT + WB_OUT;
    document.getElementById("summary-left").innerHTML =
      NB_IN + SB_IN + EB_IN + WB_IN;
    document.getElementById("summary-jam").innerHTML =
      NB_IN + SB_IN + EB_IN + WB_IN > 0;
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

// document.getElementById("spinner").style.visibility = "visible";
// document.getElementById("cycle").style.visibility = "visible";
// document.getElementById("cycle").innerHTML =
//   "simulating North/South Cycle for " + gcl + " seconds";
// setTimeout(function() {
//   document.getElementById("spinner").style.visibility = "hidden";
//   document.getElementById("cycle").innerHTML = "Some Text";
//   document.getElementById("cycle").style.visibility = "hidden";
//   retrieveNorthSouthCylce(modelInputObj);

//   document.getElementById("spinner").style.visibility = "visible";
//   document.getElementById("cycle").style.visibility = "visible";
//   document.getElementById("cycle").innerHTML =
//     "simulating East/West Cycle for " + gcl + " seconds";
//   setTimeout(function() {
//     document.getElementById("spinner").style.visibility = "hidden";
//     document.getElementById("cycle").innerHTML = "Some Text";
//     document.getElementById("cycle").style.visibility = "hidden";
//     retrieveEastWestCylce(modelInputObj);
//   }, 3000);
// }, 3000);

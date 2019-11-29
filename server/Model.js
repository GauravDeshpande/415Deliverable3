const { cosh } = require("mathjs");
const baseHyperRate = 0.4;

function simulatorEngine(data) {
  //Setup Equations Paramaters
  let c_p_s = data.carsPerSec;
  if (c_p_s <= 0) {
    c_p_s = 1;
  }
  let h_r = baseHyperRate - data.hyperRate;
  let g_c_l = data.greenCycleLength;

  //Integral Equations to Calculate area
  let totalOutput = c_p_s * (1 / h_r) * Math.log(cosh(h_r * g_c_l));

  //Build Output
  let carsLeftOver = data.carInputAmount - totalOutput; //cars that dont make it through
  let carsWentThrough = Math.round(totalOutput); //rounded amount of cars that can make it through
  let finalOut = {
    carsThrough:
      carsWentThrough > data.carInputAmount //if car area output greater than car input amount
        ? Math.round(data.carInputAmount) //return car input
        : carsWentThrough, // else return the calculated area
    carsStopped: carsLeftOver < 0 ? 0 : Math.round(carsLeftOver) //return cars left over or zero.
  };
  return finalOut;
}
module.exports = {
  simulatorEngine: simulatorEngine
};

//example JSON input
var obj = {
  carsPerSec: 5,
  hyperRate: 0.3,
  greenCycleLength: 10,
  carInputAmount: 40
};

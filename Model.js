const { cosh } = require("mathjs");
function simulatorEngine(data) {
  //calculate cars out
  let c_p_s = data.carsPerSec;
  let h_r = data.hyperRate;
  let g_c_l = data.greenCycleLength;
  let totalOutput = c_p_s * (1 / h_r) * Math.log(cosh(h_r * g_c_l));
  //build engine output
  let finalOut = {
    carsStopped: Math.round(data.carInputAmount - totalOutput),
    carsLeft: Math.round(totalOutput * data.leftPercent),
    carsStraight: Math.round(totalOutput * data.straightPercent)
  };
  return finalOut;
}
var obj = {
  carsPerSec: 5,
  hyperRate: 0.4,
  greenCycleLength: 20,
  carInputAmount: 100,
  leftPercent: 0.2,
  straightPercent: 0.8
};
console.log(simulatorEngine(obj));

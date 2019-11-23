const { cosh } = require("mathjs");
const baseHyperRate = 0.4;
function simulatorEngine(data) {
  //calculate cars out
  let c_p_s = data.carsPerSec;
  let h_r = baseHyperRate - data.hyperRate;
  let g_c_l = data.greenCycleLength;
  let totalOutput = Math.round(c_p_s * (1 / h_r) * Math.log(cosh(h_r * g_c_l)));
  //build model output
  let carsLeftOver = Math.round(data.carInputAmount - totalOutput);
  let carsWentThrough = Math.round(totalOutput);
  let finalOut = {
    carsThrough:
      carsWentThrough > data.carInputAmount
        ? data.carInputAmount
        : carsWentThrough,
    carsStopped: carsLeftOver < 0 ? 0 : carsLeftOver
  };
  return finalOut;
}
module.exports = {
  simulatorEngine: simulatorEngine
};
// var obj = {
//   carsPerSec: 5,
//   hyperRate: 0.4,
//   greenCycleLength: 20,
//   carInputAmount: 100
// };
// console.log(simulatorEngine(obj));
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) != "string")
    return false;

  if ((parseInt(sampleActivity, 10)) && MODERN_ACTIVITY / sampleActivity > 1)
    return Number(Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693));
  else
    return false;
};
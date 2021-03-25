const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = (typeof options.repeatTimes === "undefined") ? 0 : options.repeatTimes;
  const separator = (typeof options.separator === "undefined") ? "+" : options.separator;
  let addition = (typeof options.addition === "undefined") ? "" : options.addition;
  const additionRepeatTimes = (typeof options.additionRepeatTimes === "undefined") ? 1 : options.additionRepeatTimes;
  const additionSeparator = (typeof options.additionSeparator === "undefined") ? "|" : options.additionSeparator;
  str += "";
  //str+=addition;
  for (let i = 0; i < additionRepeatTimes; i++) {
    str += addition;
    if (i < additionRepeatTimes - 1)
      str += additionSeparator;

  }
  const str_ = str;
  for (let i = 1; i < repeatTimes; i++) {
    str += separator;
    str += str_;
  }
  return str;
};
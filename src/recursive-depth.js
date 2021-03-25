const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0;
    let InnerDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        InnerDepth = this.calculateDepth(arr[i]);
        if (counter < InnerDepth) counter = InnerDepth;
      }
    };
    return ++counter;
  }
};
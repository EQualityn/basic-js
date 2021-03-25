const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr2 = [];
  if (!Array.isArray(arr))
    throw Error;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      i++;
    } else if (arr[i] == "--discard-prev") {
      if (arr[i - 2] != "--discard-next")
        arr2.pop();
    } else if (arr[i] == "--double-next") {
      if (i < arr.length - 1) {
        arr2.push(arr[i + 1]);
        arr2.push(arr[i + 1]);
        i++;
      }
    } else if (arr[i] == "--double-prev") {
      if (i != 0 && arr[i - 2] != "--discard-next") {
        arr2.push(arr[i - 1]);
      }
    } else if (arr[i] !== undefined) {
      arr2.push(arr[i]);
    }

  }

  return arr2;
};
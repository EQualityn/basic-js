const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }
  encrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    var result = '';
    var CurrKey = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
        result += String.fromCharCode(((str[i].charCodeAt() + key[CurrKey % key.length].charCodeAt()) % 26) + 65);
        CurrKey++;
      } else {
        result += str[i];
      }
    }
    if (this.type == false) {
      return str.split('').reverse().join('');
    }
    return result;
  }
  decrypt(str, key) {
    str = str.toUpperCase();
    key = key.toUpperCase();
    var result = '';
    var CurrKey = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
        result += String.fromCharCode(((str[i].charCodeAt() - key[CurrKey % key.length].charCodeAt() + 26) % 26) + 65);
        CurrKey++;
      } else {
        result += str[i];
      }
    }
    if (this.type == false) {
      return str.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = VigenereCipheringMachine;
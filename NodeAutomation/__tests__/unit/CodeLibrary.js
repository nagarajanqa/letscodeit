const assert = require("assert").strict;

class CodeLibrary {

  isPalindrome(str) {
    let c = ''
    for (let i = str.length - 1; i >= 0; i--) {
      c = c + str.charAt(i)
    }
   return c==str;
  }

  removeExtraWhiteSpace1(str) {
    let arr = str.split(" ")
    let strVal = "";
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      strVal = strVal + arr[i];
    }
    return strVal;
  }

  removeExtraWhiteSpace(str) {
    let strVal = s.replace(/\s+/g,' ').trim();
    return strVal;
  }
}

module.exports = CodeLibrary;
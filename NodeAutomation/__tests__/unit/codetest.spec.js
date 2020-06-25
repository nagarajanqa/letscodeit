const assert = require("assert").strict;
const codeLibrary = require("./CodeLibrary");
const lib = new codeLibrary();
describe("String Assertions", () => {
  it("Verify that the given string is palindrome", () => {
    let actVal = lib.isPalindrome('radar');
    assert.equal(actVal, true)   
  });

  it("Verify that the extra white space is removed in the string", () => {
    let actVal = lib.removeExtraWhiteSpace(' this is nagarajan ')
    let expval = 'this is nagarajan'
    assert.equal(actVal, expval)
  });
});
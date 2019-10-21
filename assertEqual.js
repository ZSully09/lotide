const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertEqual;

assertEqual("LHL", "LHL"); // Pass
assertEqual("LHL", "LH"); // Fail
assertEqual("Lighthouse Labs", "Lighthouse Labs"); // Pass
assertEqual("Lighthouse labs", "Lighthouse Labs"); // Fail

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    // test 1: console.log("start of loop", array1[i]);
    if (array1[i] !== array2[i]) {
      //test 2: console.log("non match found", array1[i], array2[i]);
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  //use eqArrays function for the array comparisson
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};
// Create a version of map in order to get some practice building higher-order functions
// The map function will take in two arguments:
//    1. An array to map
//    2. A callback function

const words = ["ground", "control", "to", "major", "tom"];

// Define an empty map function

const map = function(array, callback) {
  // console.log("array: ", array);   test 1
  // console.log("callback: ", callback);   test 2
  const results = [];
  for (let item of array) {
    // console.log("item BEFORE: ", item);  test 3
    // console.log("item AFTER: ", callback(item));   test 4
    // console.log("---");  test 5
    results.push(callback(item));
  }
  return results;
};
// Call map and pass in our words and a simple arrow function

const results1 = map(words, word => word[0]);
// console.log(results1);   test 6

assertArraysEqual(results1, ["g", "c", "t", "m", "z"]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results1, ["g", "c", "t", "m", "m", "z"]);
results1.push("z"); //push a value into the array for test 7
assertArraysEqual(results1, ["g", "c", "t", "m", "t", "z"]);

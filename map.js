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

module.exports = map;

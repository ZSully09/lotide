// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     // test 1: console.log("start of loop", array1[i]);
//     if (array1[i] !== array2[i]) {
//       //test 2: console.log("non match found", array1[i], array2[i]);
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(array1, array2) {
//   //use eqArrays function for the array comparisson
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

// Create the function takeUntil which will take in two parameters:
//    1. The array to work with
//    2. The callback (which Lodash calls "predicate")

const takeUntil = function(array, callback) {
  // iterate over the array
  for (let i = 0; i < array.length; i++) {
    // when callback returns true (Results1: x < 0; Results2 x === ",") at element i return a slice of the array from index 0 up to but not including the element (i) where the condition is met
    if (callback(array[i])) {
      return array.slice(0, i);
    }
  } //if condition is never met return the original array
  return array;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

// console.log(results1);

// console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood"
];
const results2 = takeUntil(data2, x => x === ",");

// console.log(results2);

// assertArraysEqual(takeUntil(results1, x => x < 0), [1, 2, 5, 7, 2]);

// assertArraysEqual(takeUntil(results2, x => x === ","), [
//   "I've",
//   "been",
//   "to",
//   "Hollywood"
// ]);

/* Expected Results
[ 1, 2, 5, 7, 2 ]
---
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/

module.exports = takeUntil;

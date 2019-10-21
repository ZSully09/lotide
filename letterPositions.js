const letterPositions = function(sentence) {
  // logic to update results here
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  // console.log(results); test to see what the array is
  return results;
};

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
//     console["log"](`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

// assertArraysEqual(letterPositions("hello").h, [0]); //p
// assertArraysEqual(letterPositions("hello").e, [1]); //p
// assertArraysEqual(letterPositions("hello").l, [2, 3]); //p
// assertArraysEqual(letterPositions("hello").o, [4]); //p

// assertArraysEqual(letterPositions("hello").e, [2]); //f

module.exports = letterPositions;

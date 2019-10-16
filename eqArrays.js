const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < 3; i++) {
    // test 1: console.log("start of loop", array1[i]);
    if (array1[i] === array2[i]) {
      //continue
    } else {
      //test 2:: console.log("non match found", array1[i], array2[i]);
      return false;
    }
  }
  return true;
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true);
eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); //fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), true); // fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false); // pass

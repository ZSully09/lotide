const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // pass
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false); //pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), true); // fail
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false); // pass

// eqArrays([1, 2, 3], [1, 2, 3]); // => true
// eqArrays([1, 2, 3], [3, 2, 1]); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// eqArrays(["1", "2", "3", "4"], ["1", "2", "3", "4"]); // => true
// eqArrays(["1", "2", "3", "4"], ["1", "2", "3", "5"]); // => false

// eqArrays(["1", "2", "3"], ["1"]); // => false
// eqArrays(["1"], ["1", "2", "3"]); // => false

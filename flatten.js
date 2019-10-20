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

// Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.

const flatten = function(array) {
  // Create a new array
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let x = 0; x < array[i].length; x++) {
        newArray.push(array[i][x]);
        // console.log(newArray);
      }
      // console.log(newArray);
    } else {
      newArray.push(array[i]);
    }
    // console.log(newArray);
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

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

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
const middle = function(array) {
  // Create the new array that the middle value(s) will be returned to
  let newArray = [];
  //
  if (array.length === 1 || array.length === 2) {
    return newArray;
  } else if (array.length % 2 === 0) {
    var evenArr = (array.length - 1) / 2;
    // evenArr = 2.5: need to round up and down to return elemnts in the middle
    var intDown = Math.floor(evenArr);
    var intUp = Math.ceil(evenArr);
    // console.log(intDown);
    // console.log(intUp);
    // console.log(`The indexes are ${intDown} and ${intUp}`);
    // console.log(`The elements are ${array[intDown]} and ${array[intUp]}`);
    newArray.push(array[intDown]);
    newArray.push(array[intUp]);
    return newArray;
  } else {
    var oddArr = (array.length - 1) / 2;
    // console.log("Index is ", oddArr);
    // console.log("Element is :", array[oddArr]);
    newArray.push(array[oddArr]);
    return newArray;
  }
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

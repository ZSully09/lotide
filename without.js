const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(array, itemsToRemove) {
  let newArray = [];
  // iterate over the given array
  for (let i = 0; i < array.length; i++) {
    // iterate over the itemstoRemove array
    for (let x = 0; x < itemsToRemove.length; x++) {
      // if the element in the given array is equal to the element in the itemsToRemove array then break from the loop
      if (array[i] === itemsToRemove[x]) {
        break;
      }
      if (itemsToRemove.length - 1 === x) {
        newArray.push(array[i]);
        // Test to see what has been pushed for each test
        // console.log(newArray);
      }
    }
  }
  return newArray;
};

const words = ["hello", "world", "lighthouse"];
// without(["hello", "world", "lighthouse"], ["lighthouse"]);
// no need to capture return value for this test case
// // Make sure the original array was not altered by the without function

assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 2, 3, 4, 5], [1, 2, 3, 4]), [5]);

assertArraysEqual(without([1, 2, 3, 4], [2, 3]), [1, 4]);
assertArraysEqual(without([1, 2, 3, 4, 5, 6], [3, 4]), [1, 2, 5, 6]);

assertArraysEqual(without(words, ["hello", "world", "lighthouse"]), []);

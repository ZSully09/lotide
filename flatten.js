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

module.exports = flatten;

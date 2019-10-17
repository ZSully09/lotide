const eqArrays = function(array1, array2) {
  for (let i = 0; i < 3; i++) {
    if (array1[i] === array2[i]) {
    } else {
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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  const newString = sentence.split(" ").join("");
  // console.log(newString); returns sentence with no spaces
  return newString;
};
letterPositions("lighthouse in the house");

// Peer programmed with KingOfRedOnions & drystar

const assertObjectsEqual = function(actual, expected) {
  // added line from compass
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      //pass actual and expected to inspect function
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      //pass actual and expected to inspect function
      `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // console.log("reached");
      // console.log(object1[key]);
      // console.log(object2[key]);
      if (eqArrays(object1[key], object2[key]) === false) {
        // console.log(object1[key]);
        // console.log(object2[key]);
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//modify tests to call assertObjectsEqual (from what was in eqObjects)
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);

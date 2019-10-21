// Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

// Implement findKeyBy Value function
const findKeyByValue = function(obj, val) {
  // Implement for of loop
  for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    if (obj[key] === val) {
      // console.log(val);
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

module.exports = findKeyByValue;

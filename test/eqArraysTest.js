const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
function head(array) {
  return array[0];
}
assertEqual(head([5, 6, 7]), 5); // Pass
assertEqual(head([1, 6, 12]), 1); // Pass
assertEqual(head([5, 6, 7]), 7); // Fail
assertEqual(head([1, 6, 12]), ""); // Fail

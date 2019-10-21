const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 6, 7]), 5); // Pass
assertEqual(head([1, 6, 12]), 1); // Pass
assertEqual(head([5, 6, 7]), 7); // Fail
assertEqual(head([1, 6, 12]), ""); // Fail

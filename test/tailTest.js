const assertEqual = require("../assertEqual");
const tail = require("../tail");

const result = tail(["Lighthouse", "Labs", "Week2"]);

assertEqual(result[1], "Week2"); // Pass
assertEqual(result[0], "Labs"); // Pass

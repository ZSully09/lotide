const letterPositions = function(sentence) {
  // logic to update results here
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  // console.log(results); test to see what the array is
  return results;
};

module.exports = letterPositions;

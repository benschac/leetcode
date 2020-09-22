function getAllPermutations(string) {
  // console.log(string);

  var results = [];

  if (string.length === 1) {
    results.push(string);
    return results;
  }

  for (var i = 0; i < string.length; i++) {
    var firstChar = string[i];
    console.log(string);
    var charsLeft = [string.splice(0, i), string.splice(i + 1)];
    console.log(charsLeft);

    var innerPermutations = getAllPermutations(charsLeft);
    for (var j = 0; j < innerPermutations.length; j++) {
      console.log(j, firstChar, innerPermutations);
      debugger;
      results.push(firstChar + innerPermutations[j]);
    }
  }
  return results;
}

console.log(getAllPermutations([1, 2, 3]));

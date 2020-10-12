var isValid = function (s) {
  let valid = ["()", "[]", "{}"];
  let opening = { "(": ")", "[": "]", "{": "}" };
  let mid;
  let sArray = Array.from(s);

  let i = 0;
  while (i < sArray.length - 1) {
    console.log(i, sArray[i], opening[sArray[i]]);
    if (opening[sArray[i]] === sArray[i + 1]) {
      sArray.splice(i, 1);
      sArray.splice(i, 1);

      i = 0;
    } else {
      i++;
    }
  }

  return sArray.length ? false : true;
};

console.log(isValid("(()"));

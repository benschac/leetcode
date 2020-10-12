var myAtoi = function (str) {
  const signedPos = 2147483647;
  const signedNeg = -2147483648;

  let [toNumb] = str.trim().split(" ");

  console.log(toNumb);
  toNumb = toNumb.split('').filter( el => {
    if (el > 1)
  })  Number(toNumb);

  if (!toNumb || Number.isNaN(toNumb)) {
    return 0;
  }

  if (toNumb < signedNeg) {
    return signedNeg;
  } else if (toNumb > signedPos) {
    return signedPos;
  }

  return toNumb;
};

console.log(myAtoi("  -0012a42"));
// console.log(myAtoi("42"));
// console.log(myAtoi("      -42"));
// console.log(myAtoi("words and -987"));
// console.log(myAtoi("-91283472332"));

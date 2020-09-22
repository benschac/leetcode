var reverse = function (x) {
  let result = "";

  const isPositve = x > 0 ? 1 : -1;

  x = Math.abs(x);

  while (x) {
    result += x % 10;
    x = Math.floor(x / 10);
  }

  result = Number(result) * isPositve;

  if (result > 2147483647) {
    return 0;
  }

  if (result < -2147483648) {
    return 0;
  }

  return result;
};

console.log(reverse(123));

// 12
// 12 % 10
// Math.floor(12 / 10) == 1
// 21;

// 123
// 123 % 10
// 3
// 123 / 10 == 12
// 12 % 10
// 3 + 2
// 12 / 10 = 1

// 1 % 10
// 1 / 10

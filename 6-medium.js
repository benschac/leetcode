var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  let isDiagonal = false;
  let y = 0;

  let matrix = [];

  for (let index = 0; index < numRows; index++) {
    matrix[index] = new Array();
  }

  for (let j = 0; j < s.length; j++) {
    matrix[y].push(s[j]);

    if (y === numRows - 1) {
      isDiagonal = true;
    }

    if (y === 0) {
      isDiagonal = false;
    }

    y = isDiagonal ? y - 1 : y + 1;
  }

  return matrix.reduce((prev, curr) => prev + curr.join(""), "");
};

console.log(convert("AB", 1));

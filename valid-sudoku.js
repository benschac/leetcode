function check(list) {
  const nonZeros = list.filter((number) => number !== 0);
  const uniques = new Set(nonZeros);

  const nonZerosSize = nonZeros.length;
  const uniquesSize = uniques.size;

  if (uniquesSize !== nonZerosSize) {
    return false;
  }
  return true;
}

function validSudoku(board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];

    if (!check(row)) {
      return false;
    }

    let column = [];
    for (let j = 0; j < row.length; j++) {
      column.push(board[j][i]);
    }

    if (!check(column)) {
      return false;
    } else {
      column = [];
    }
  }

  let count = 0;

  let tile = [];
  while (count < 82) {
    let xIterator = count % 3;
    let yIterator = Math.floor(count / 3) % 3;
    let xOffset = Math.floor(Math.floor(count / 9) % 3);
    let yOffset = Math.floor(Math.floor(count / 3) / 9) * 3;
    tile.push(board[xIterator + xOffset][yIterator + yOffset]);

    if (tile.length % 9) {
      if (!check(tile)) {
        return false;
      } else {
        tile = [];
      }
    }

    count++;
  }

  return true;
}
console.log(
  validSudoku([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
);

// Sudoku: Have the `board` argument is a 2D matrix with 9 rows and 9 numbers in each row to makeup the sudoku puzzle grid. devising a function that will take in a two-dimensional array representing a potential solution to a game of Sudoku and return whether it is a valid solution.
// i.e. [[8,3,5,4,1,6,9,2,7], [2,9,6,8,5,7,4,3,1],... 7 more arrays of 9

class Sudoku {
  // complete the methods for testRows, testCols, testRegions (note you are not required to finish them all)

  check(list) {
    let uniques = new Set(list);

    if (list.length !== uniques.size) {
      return false;
    }

    return true;
  }

  testRows(board) {
    for (let i = 0; i < board.length; i++) {
      let row = board[i];
      let uniques = new Set(row);

      if (row.length !== uniques.size) {
        return false;
      }
    }

    return true;
  }

  testCols(board) {
    let column = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        const number = board[j][i];
        column.push(number);
      }

      if (!this.check(column)) {
        return false;
      } else {
        column = [];
      }
    }

    return true;
  }

  testRegions(board) {
    let count = 0;
    let region = [];

    while (count < 81) {
      const xIterator = count % 3;
      const yIterator = Math.floor(count / 3) % 3;
      const xOffset = (Math.floor(count / 9) % 3) * 3;
      const yOffset = Math.floor(count / 27) * 3;

      console.log({ xIterator, yIterator, xOffset, yOffset, count });
      region.push(board[xIterator + xOffset][yIterator + yOffset]);

      if (region.length % 9 === 0) {
        if (!this.check(region)) {
          return false;
        } else {
          region = [];
        }
      }

      count++;
    }

    return true;
  }

  testBoard(board) {
    // if (!this.testRows(board)) return false;
    // if (!this.testCols(board)) return false;
    if (!this.testRegions(board)) return false;
    return true;
  }
}

// valid solution:
const validBoard = [
  [8, 3, 5, 4, 1, 6, 9, 2, 7],
  [2, 9, 6, 8, 5, 7, 4, 3, 1],
  [4, 1, 7, 2, 9, 3, 6, 5, 8],
  [5, 6, 9, 1, 3, 4, 7, 8, 2],
  [1, 2, 3, 6, 7, 8, 5, 4, 9],
  [7, 4, 8, 5, 2, 9, 1, 6, 3],
  [6, 5, 2, 7, 8, 1, 3, 9, 4],
  [9, 8, 1, 3, 4, 5, 2, 7, 6],
  [3, 7, 4, 9, 6, 2, 8, 1, 5],
];

const invalidBoardRow = [
  [8, 3, 5, 1, 1, 6, 9, 2, 7],
  [2, 9, 6, 8, 5, 7, 4, 3, 1],
  [4, 1, 7, 2, 9, 3, 6, 5, 8],
  [5, 6, 9, 1, 3, 4, 7, 8, 2],
  [1, 2, 3, 6, 7, 8, 5, 4, 9],
  [7, 4, 8, 5, 2, 9, 1, 6, 3],
  [6, 5, 2, 7, 8, 1, 3, 9, 4],
  [9, 8, 1, 3, 4, 5, 2, 7, 6],
  [3, 7, 4, 9, 6, 2, 8, 1, 5],
];

const invalidBoardColumn = [
  [8, 3, 5, 4, 1, 6, 9, 2, 7],
  [2, 9, 6, 8, 5, 7, 4, 3, 7],
  [4, 1, 7, 2, 9, 3, 6, 5, 8],
  [5, 6, 9, 1, 3, 4, 7, 8, 2],
  [1, 2, 3, 6, 7, 8, 5, 4, 9],
  [7, 4, 8, 5, 2, 9, 1, 6, 3],
  [6, 5, 2, 7, 8, 1, 3, 9, 4],
  [9, 8, 1, 3, 4, 5, 2, 7, 6],
  [3, 7, 4, 9, 6, 2, 8, 1, 5],
];

const invalidBoardRegion = [
  [8, 3, 5, 4, 1, 6, 9, 2, 7],
  [2, 9, 5, 8, 5, 7, 4, 3, 7],
  [4, 1, 7, 2, 9, 3, 6, 5, 8],
  [5, 6, 9, 1, 3, 4, 7, 8, 2],
  [1, 2, 3, 6, 7, 8, 5, 4, 9],
  [7, 4, 8, 5, 2, 9, 1, 6, 3],
  [6, 5, 2, 7, 8, 1, 3, 9, 4],
  [9, 8, 1, 3, 4, 5, 2, 7, 6],
  [3, 7, 4, 9, 6, 2, 8, 1, 5],
];

// console.log(Math.floor(9 / 3) % 3);

let sodoku = new Sudoku();
// console.log(sodoku.testBoard(validBoard, 'valid'));
// console.log(sodoku.testBoard(invalidBoardRow === false), 'invalid row');
// console.log(sodoku.testBoard(invalidBoardColumn === false), 'invalid column');
console.log(sodoku.testBoard(validBoard), "invalid region");

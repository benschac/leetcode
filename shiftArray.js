const rotateBad = (matrix) => {
  const length = matrix[0].length;
  const height = matrix.length;
  let shiftedArray = [];
  
  shiftedArray = Array(height).fill().map(()=>Array(length).fill(0))
  console.log(shiftedArray)
  
  for(let i = 0; i < length; i++) {
    for(let j = 0; j < height; ++j) {
      shiftedArray[j][length - i - 1] = matrix[i][j]
    }
  }
  
  return shiftedArray;
}




function rotate(matrix) {
  if(matrix.length === 1 || matrix.length === 0) {
    return matrix
  }

  let size = matrix.length -1;

  for (let layer = 0; layer < Math.floor(size / 2); layer++) {
    
    for (let j = i; j < size - layer; j++) {
      let top = matrix[layer][j]
      let right = matrix[j][size - layer];
      let bottom = matrix[size - layer][size - j]
      let left = matrix[size - j][layer];
      
      

      matrix[layer][j] = left;
      matrix[j][size - layer] = top;
      matrix[size - layer][size - j] = right;
      matrix[size - j][layer] = bottom;
      
    }
  }
  return matrix
}

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));

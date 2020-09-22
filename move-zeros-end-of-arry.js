function moveZeros(arr) {
  // 2 0 2 0 --> 2200
  // 20150 --> 21500

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    const next = arr[i + 1] ? arr[i + 1] : 0;

    if (el === 0 && next > 0) {
      let temp = arr[i];
      arr[i] = next;
      arr[i + 1] = temp;
    }
  }

  return arr;
}

console.log(moveZeros([2, 0, 1, 5, 0]));
console.log(moveZeros([2, 0, 2, 0]));
console.log(moveZeros([5, 3, 1, 2, 4]));

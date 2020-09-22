function fibsLike(arr) {
  let longest = 0;

  for (let q = 0; q < arr.length; q++) {
    let acc = new Set([]);
    for (let i = q; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let slow = arr[i];
        let fast = arr[j];
        let idx = arr.indexOf(slow + fast);
        if (idx > i) {
          acc.add(slow);
          acc.add(fast);
          acc.add(arr[idx]);

          i = idx;
          j = idx;
        }
      }
    }

    console.log(acc);

    if (longest < acc.size) {
      longest = acc.size;
    }
  }

  return longest;
}

console.log(fibsLike([1, 3, 7, 11, 12, 14, 18]));

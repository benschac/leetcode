const threeSum = (A) => {
  const uniques = [];
  for (let i = 0; i < A.length; i++) {
    const first = A[i];

    for (let j = 0; j < A.length; j++) {
      const second = A[j];

      for (let y = 0; y < A.length; y++) {
        const third = A[y];

        if (i !== j && j !== y && y !== i) {
          if (first + second + third === 0) {
            const sorted = [first, second, third].sort((a, b) => {
              if (a < b) {
                return -1;
              } else if (b > a) {
                return 1;
              } else {
                return 0;
              }
            });

            console.log(sorted, uniques);
            let noRepeat = uniques.every(
              (array) =>
                array[0] !== sorted[0] &&
                array[1] !== sorted[1] &&
                array[2] !== sorted[2]
            );

            if (noRepeat) {
              uniques.push(sorted);
            }

            if (
              uniques.every(
                (array) =>
                  array[0] !== sorted[0] &&
                  array[1] !== sorted[1] &&
                  array[2] !== sorted[2]
              )
            ) {
              uniques.push(sorted);
            }
          }
        }
      }
    }
  }

  return uniques;
};

console.log(threeSum([-3, -1, 1, 0, 2, 10, -2, 8]));

// const distanceOfClosestRepeatedEntries = (sentence) => {
//   let smallest;
//   const cache = sentence.reduce((prev, curr, idx) => {
//     prev[curr] = prev[curr] ? prev[curr].concat(idx) : [idx];
//     return prev;
//   }, {});

//   for (let val in cache) {
//     let arr = cache[val];

//     while (arr.length) {
//       let distance = arr.splice(0, 1);

//       if (arr.length > 0) {
//         smallest =
//           smallest < Math.abs(distance[0] - arr[0])
//             ? smallest
//             : Math.abs(distance[0] - arr[0]);
//       }
//     }
//   }

//   return smallest ? smallest : -1;
// };

const distanceOfClosestRepeatedEntries = (sentence) => {
  const cache = {};
  let smallest = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < sentence.length; i++) {
    const word = sentence[i];

    if (word in cache) {
      const lastIdx = cache[word];
      const distance = i - lastIdx;

      smallest = Math.min(smallest, distance);
    }

    cache[word] = i;
  }

  return smallest == Number.MAX_SAFE_INTEGER ? -1 : smallest;
};

console.log(
  distanceOfClosestRepeatedEntries([
    "This",
    "is",
    "a",
    "sentence",
    "with",
    "repeated",
    "then",
    "1",
    "repeated",
  ])
);

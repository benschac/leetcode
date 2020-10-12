const longestPalindrome = (s) => {
  s = s.toLowerCase();

  if (!s.length) {
    return 0;
  }

  if (s.length === 2) {
    if (s[0] === s[1]) {
      return 1;
    }
  }

  let hightestOdd = 0;

  const evens = [];
  const cache = Array.from(s).reduce((cache, letter) => {
    cache[letter] = cache[letter] ? (cache[letter] += 1) : 1;
    return cache;
  }, {});

  // highest evens, highest odd.

  for (let key in cache) {
    if (cache[key] % 2 !== 0 && cache[key] > hightestOdd) {
      hightestOdd = cache[key];
    } else if (cache[key] % 2 === 0) {
      evens.push(cache[key]);
    }
  }

  const sumOfEvens = evens.reduce((target, value) => {
    target = target + value;
    return target;
  }, 0);

  console.log(cache);

  if (!hightestOdd) {
    return 1;
  }
  return sumOfEvens + hightestOdd;
};

console.log(longestPalindrome("abbcccd"));
console.log(longestPalindrome("sS"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("xyz"));
console.log(longestPalindrome("aabbc"));
console.log(longestPalindrome("aAbBcCdDeE"));
console.log(longestPalindrome("abracadabra"));

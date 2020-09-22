var lengthOfLongestSubstring = function (s) {
  let longest = 0;
  let history = [];
  for (char of s) {
    if (!history.includes(char)) {
      history.push(char);

      if (longest <= history.length) {
        longest = history.length;
      }
    } else {
      let index = history.indexOf(char);
      history = history.slice(index + 1);
      history.push(char);
    }
  }

  return longest;
};

module.exports = lengthOfLongestSubstring;

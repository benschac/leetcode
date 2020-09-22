var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  let prefix = strs[0];

  for (let index = 1; index < strs.length; index++) {
    while (strs[index].find(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      if (prefix.length === 0) return "";
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["aa", "ab"]));

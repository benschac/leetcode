// function lengthOfLastWord(s) {
//   if (s.length === 0 || s.replace("/S+/g", "").length === 0) {
//     return 0;
//   }
//   const words = s.split(" ");

//   return words[words.length - 1].length;
// }

function lengthOfLastWord(s) {
  let end = false;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " " && !end) {
      end = i;
    }

    if (end === 0) {
      return 1;
    }

    if (s[i] === " " && end !== false) {
      return s.substring(i, end).length;
    }
  }

  if (!end) {
    return 0;
  }

  return s.substring(0, end + 1).length;
}

console.log(lengthOfLastWord("Hello World Benjamin"));
console.log(lengthOfLastWord(" "));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("ab "));
console.log(lengthOfLastWord("       "));
console.log(lengthOfLastWord(" a "));

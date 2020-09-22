const validPalindrome = (s) => {
  let formatted = s.replace(/[0-9]|\W/g, "").toLowerCase();

  for (let i = 0; i < Math.floor(formatted.length / 2); i++) {
    let first = i;
    let last = formatted.length - 1 - i;
    if (formatted[first] !== formatted[last]) {
      return false;
    }
  }

  return true;
};

console.log(validPalindrome("po4o4p"));

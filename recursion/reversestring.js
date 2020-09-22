function reverse(str) {
  if (str === "") {
    return "";
  } else {
    console.log(str.substr(1), str.charAt(0));
    debugger;
    return reverse(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverse("benjamin"));

function reverseWords(str) {
  var splits = str.split(" ");
  var arr = [];
  for (var i = 0; i < splits.length; i++) {
    arr.push(
      splits[i]
        .split("")
        .reverse()
        .join("")
    );
  }
  return arr.join(" ");
}
console.log(reverseWords("This is an example!"));
console.log(reverseWords("double  spaces"));

function reverseNumber(num) {
  var splitNum = [];
  if (num < 0) {
    splitNum = num
      .toString()
      .slice(1)
      .split("")
      .reverse();
    splitNum.unshift("-");
  } else {
    splitNum = num
      .toString()
      .split("")
      .reverse();
  }
  return parseInt(splitNum.join(""));
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(1000));

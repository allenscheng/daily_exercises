// function makeNegative(num) {
//   return num <= 0 ? num : num * -1;
// }

function makeNegative(num) {
  if (num === 0) {
    return num;
  } else if (num < 0) {
    return num;
  } else {
    return num * -1;
  }
}
console.log(makeNegative(-5));

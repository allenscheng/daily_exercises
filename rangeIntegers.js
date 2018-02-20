// function generateRange(min, max, step) {
//   let arrRange = [];
//   for (let i = min; i <= max; i += step) {
//     arrRange.push(i);
//   }
//   return arrRange;
// }
// console.log(generateRange(1, 10, 3));

function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}
console.log(digitize(35231));
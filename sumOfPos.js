function sumOfPos(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
}
console.log(sumOfPos([1, -4, 7, 12]));

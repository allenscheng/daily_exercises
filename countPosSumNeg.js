function countPositivesSumNegatives(input) {
  var positiveArr = [];
  var negativeSum = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i] <= 0) {
      negativeSum += input[i];
    } else {
      positiveArr.push(input[i]);
    }
  }
  return [positiveArr.length, negativeSum];
}
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
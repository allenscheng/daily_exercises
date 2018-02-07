function narcissisticNum(num) {
  let sum = 0;
  let raised = 0;
  let string = num.toString().split("");
  let length = string.length;
  for (var i = 0; i < length; i++) {
    raised = Math.pow(parseInt(string[i]), length);
    sum += raised;
  }
  return sum === num;
}
console.log(narcissisticNum(153));

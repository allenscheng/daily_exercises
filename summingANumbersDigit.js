function sumDigits(number) {
  if (number < 0) {
    number *= -1;
  }
  let split = number.toString().split("");
  let sum = 0;
  for (let i = 0; i < split.length; i++) {
    sum += parseInt(split[i]);
  }
  return sum;
}
console.log(sumDigits(-32));

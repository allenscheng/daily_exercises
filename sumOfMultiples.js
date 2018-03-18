function sumMul(n, m) {
  let sum = 0;
  if (m <= 0) {
    return "INVALID";
  } else {
    for (let i = n; i < m; i += n) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumMul(4, 123));

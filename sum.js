function sum(numbers) {
  if (numbers.length === 0) {
    return 0;
  } else {
    return numbers.reduce((sum, curr) => sum + curr);
  }
}
console.log(sum([]));
console.log(sum([1, 2, 3, -4]));

var numbers = [1, 2, 4, 2];
var sum = numbers.reduce(function(acc, curr) {
  return acc + curr;
});
console.log(sum);
var numbers = [1, 2, 4, 2];
var sum = numbers.reduce((acc, curr) => acc + curr);
console.log(sum);


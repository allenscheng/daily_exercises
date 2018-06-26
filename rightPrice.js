function priceIsRight(numbers, target) {
  let max;
  for (let i = 0; i < numbers.length; i++) {
    if (
      (max === undefined && numbers[i] <= target) ||
      (numbers[i] > max && numbers[i] <= target)
    ) {
      max = numbers[i];
    }
  }
  return max;
}
console.log(priceIsRight([1, 2, 3, 4], 1));
console.log(priceIsRight([1, 2, 3, 4], 2));
console.log(priceIsRight([1, 2, 3, 4], 3));
console.log(priceIsRight([1, 2, 3, 4], 4));
console.log(priceIsRight([1, 2, 3, 4], 5));
console.log(priceIsRight([1, 2, 3, 4], 0));

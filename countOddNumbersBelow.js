function oddCount(n) {
  let array = [];
  for (var i = 1; i < n; i += 2) {
    array.push(i);
  }
  return array.length;
}
console.log(oddCount(15));

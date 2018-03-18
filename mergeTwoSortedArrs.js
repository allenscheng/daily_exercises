function mergeArrays(arr1, arr2) {
  let mergedArr = arr1
    .concat(arr2)
    .filter((el, i, a) => i === a.indexOf(el))
    .sort(function(a, b) {
      return a - b;
    });
  return mergedArr;
}
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

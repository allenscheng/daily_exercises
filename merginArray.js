let arr3 = [1, 3, 5, 7, 9, 11, 12];
let arr4 = [1, 2, 3, 4, 5, 10, 12];
function mergeArrays(arr1, arr2) {
  let merged = arr1.concat(arr2).sort(function(a, b) {
    return a - b;
  });
  return Array.from(new Set(merged)); //this lines removes duplicates in the array
}
console.log(mergeArrays(arr3, arr4));

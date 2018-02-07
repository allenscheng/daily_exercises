function arrayPlusArray(arr1, arr2) {
  var sum1 = arr1.reduce((acc, cur) => acc + cur);
  var sum2 = arr2.reduce((acc, cur) => acc + cur);
  // for (var i = 0; i < arr1.length; i++) {
  //   sum1 += arr1[i];
  // }
  // for (var j = 0; j < arr2.length; j++) {
  //   sum2 += arr2[j];
  // }
  return sum1 + sum2;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

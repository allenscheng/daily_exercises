function shift(arr, num) {
  var shiftArr = [];
  for (var i = 0; i < arr.length; i++) {
    shiftArr[i + num % arr.length] = arr[i];
  }
  console.log(shiftArr);
}
shift([1, 2, 3, 4, 5], 2);

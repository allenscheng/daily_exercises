function shftArr(arr, place) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    let num = (i + place) % arr.length;
    result += arr[num];
  }
  return result;
}
console.log(shftArr([1, 2, 3, 4, 5], 2));

function binary(arr) {
  let num = 0;
  let binaryNum = 1;
  let length = arr.length - 1;
  for (let i = length; i >= 0; i--) {
    if (arr[i] === 1) {
      num += binaryNum;
    }
    binaryNum *= 2;
  }
  return num;
}
console.log(binary([1, 1, 1, 1]));

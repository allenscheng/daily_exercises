function missing(arrayOfArray) {
  let num = [];
  let missing = 0;
  var count = 1;
  for (let i = 0; i < arrayOfArray.length; i++) {
    num.push(arrayOfArray[i].length);
  }
  let sorting = num.sort();
  for (let j = 0; j <= arrayOfArray.length; j++) {
    if (num[j] !== count) {
      missing = count;
      break;
    }
    count += 1;
  }
  return missing;
}
console.log(missing([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));

// let num = [[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]];
// console.log(num.length);
// console.log(num[0][0].length);

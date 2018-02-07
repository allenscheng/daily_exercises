function unique(array) {
  var uniqueArray = "";
  var j = 1;
  for (var i = 0; i < array.length; i += 2) {
    if (array[i] !== array[j]) {
      uniqueArray = array[i];
      j += 1;
    } else if (array[i] === array[j]) {
      j += 2;
    }
  }
  return uniqueArray;
}
console.log(unique([1, 1, 2, 2, 3, 4, 4, 5, 5]));

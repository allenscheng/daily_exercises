function remove(str) {
  var arr = str.split(" ");
  var newStr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newStr.push(arr[i]);
    }
  }
  return newStr.join(" ");
}

console.log(
  remove(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);

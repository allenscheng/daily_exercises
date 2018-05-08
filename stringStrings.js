function stringy(size) {
  var string = "";
  for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
      string += "1";
    } else {
      string += "0";
    }
  }
  return string;
}
console.log(stringy(6));

function multiplyTable(num) {
  var result = "[0] ";
  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      if (i === 0 && j > 0) {
        result += "[" + j + "]";
      } else if (j === 0 && i > 0) {
        result += "[" + i + "] ";
      } else if (i > 0 && j > 0) {
        result += i * j + " ";
      }
    }
    result += "\n";
  }
  console.log(result);
}
multiplyTable(4);

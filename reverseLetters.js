function reverser(sentence) {
  var revStr = "";
  var strSplit = sentence.split(" ");
  for (var i = 0; i < strSplit.length; i++) {
    for (var j = strSplit[i].length - 1; j >= 0; j--) {
      revStr += strSplit[i][j];
    }
    if (i < strSplit.length - 1) {
      revStr += " ";
    }
  }
  return revStr;
  // return sentence.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(reverser("Hi mom"));
console.log(reverser("A fun little challenge!"));

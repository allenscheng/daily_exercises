function order(words) {
  return words
    .split(" ")
    .sort(function(wordA, wordB) {
      var numA = +wordA.match(/\d+/g)[0];
      var numB = +wordB.match(/\d+/g)[0];
      return numA - numB;
    })
    .join(" ");
}
console.log(order("is2 Thi1s T4est 3a"));

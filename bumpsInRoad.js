function bump(x) {
  var result = 0;
  for (var i = 0; i < x.length; i++) {
    if (x[i] === "n") {
      result++;
    }
  }
  return result > 15 ? "Car Dead" : "Woohoo!";
}
console.log(bump("n"));
console.log(bump("_nnnnnnn_n__n______n__nn_nnn"));
console.log(bump("______n___n_"));

function summy(stringOfInts) {
  var split = stringOfInts.split(" ");
  var sum = 0;
  for (var i = 0; i < split.length; i++) {
    sum += parseInt(split[i]);
  }
  return sum;
}
console.log(summy("1 2 3 4 5"));

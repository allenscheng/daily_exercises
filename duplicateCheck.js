function check(string) {
  var doubles = {};
  for (var i = 0; i < string.length; i++) {
    if (string[i] === doubles[i]) {
      doubles[i] += 1;
    } else {
    }
  }
}
console.log(check("aabbcde"));

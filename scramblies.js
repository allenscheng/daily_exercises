function scramble(str1, str2) {
  var array1 = str1.split("").sort();
  var array2 = str2.split("").sort();
  var i = 0;
  for (var x = 0; i < array2.length && x <= array1.length; x++) {
    if (array2[i] === array1[x]) {
      i++;
    }
  }
  return x <= array1.length;
}
console.log(scramble("scriptjava", "javascript"));

function scramble(str1, str2) {
  var map = {};
  for (var i in str1) {
    map[str1[i]] ? map[str1[i]]++ : (map[str1[i]] = 1);
  }
  for (var i in str2) {
    if (!map[str2[i]]) {
      return false;
    }
    map[str2[i]]--;
  }
  return true;
}
console.log(scramble("scriptjava", "javascript"));

function scramble(str1, str2) {
  var matchWord = "";
  for (var i = 0; i < str2.length; i++) {
    for (var j = 0; j < str1.length; j++) {
      if (str1[j] === str2[i]) {
        matchWord += str2[i];
        break;
      }
    }
  }
  if (matchWord === str2) {
    return true;
  } else {
    return false;
  }
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptjava", "javascript"));
console.log(scramble("scriptingjava", "javascript"));
console.log(scramble("scriptsjava", "javascripts"));
console.log(scramble("jscripts", "javascript"));
console.log(scramble("aabbcamaomsccdd", "commas"));

function solution(str) {
  var paired = [];
  var splitted = str.split('');
  var length = splitted.length / 2;
  if (str.length % 2 !== 0) {
    splitted.push('_');
  }
  for (var i = 0; i < length; i++) {
    paired.push(splitted.splice(0, 2).join(''));
  }
  return paired;
}
console.log(solution("abc"));

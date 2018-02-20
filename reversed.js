function solution(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
console.log(solution("hello"));

// below is the long hand version
// function solution(str) {
//   var reversed = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(solution("hello"));

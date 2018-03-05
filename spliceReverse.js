// function splice(str, start, finish) {
//   var word = str.split("");
//   let sliced = word
//     .slice(start, finish + 1)
//     .reverse()
//     .join("");
//   console.log(sliced);
//   console.log(str.splice(start, finish, "sliced"));
//   return word;
// }
// console.log(splice("codewars", 1, 5));

var result = "foo baz".splice(4, 0, "bar ");
console.log(result);

work in progress;

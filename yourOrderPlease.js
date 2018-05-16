// function order(words) {
//   let split = words.split(" ");
//   let newWords = [];
//   let orderNum = 1;
//   if (words === "") {
//     return words;
//   }
//   for (let i = 0; i < split.length; i++) {
//     if (split[i].includes[orderNum.toString()]) {
//       newWords.push(split[i]);
//       orderNum += 1;
//     }
//   }
//   return newWords;
// }
// console.log(order("is2 Thi1s T4est 3a"));

// let num = 2;
// let word = ["is2", "Thi1s", "T4est", "3a"];
// console.log(word[0].includes(num.toString()));

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

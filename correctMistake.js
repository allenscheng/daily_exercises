function correctMistake(str) {
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "5") {
      str.splice(i, 1, "S");
    } else if (str[i] === "0") {
      str.splice(i, 1, "O");
    } else if (str[i] === "1") {
      str.splice(i, 1, "I");
    }
  }
  return str.join("");
}
console.log(correctMistake("L0ND0N"));
console.log(correctMistake("DUBL1N"));
console.log(correctMistake("51NGAP0RE"));
console.log(correctMistake("BUDAPE5T"));
console.log(correctMistake("PAR15"));

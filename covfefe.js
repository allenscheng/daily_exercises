function covfefe(str) {
  var splitted = str.split(" ");
  var newStr = [];
  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i].includes("coverage")) {
      newStr.push(splitted[i].replace("coverage", "covfefe"));
    } else {
      newStr.push(splitted[i]);
    }
  }
  if (!str.includes("coverage")) {
    newStr.push("covfefe");
  }
  return newStr.join(" ");
}
console.log(covfefe("coverage apple coverage"));
console.log(covfefe("nothing"));
console.log(covfefe("double space "));
console.log(covfefe("covfefe"));


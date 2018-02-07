function cookie(x) {
  var type = typeof x;
  var thief = "";
  if (type === "string") {
    thief = "Zach!";
  } else if (type === "number") {
    thief = "Monica!";
  } else {
    thief = "the dog!";
  }
  return "Who ate the last cookie? It was " + thief;
}
console.log(cookie("Ryan"));
console.log(cookie(2));
console.log(cookie(true));

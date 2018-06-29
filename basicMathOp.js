function basicMathOp(operation, num1, num2) {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}
console.log(basicMathOp("+", 4, 7));
console.log(basicMathOp("-", 15, 18));
console.log(basicMathOp("*", 5, 5));
console.log(basicMathOp("/", 49, 7));

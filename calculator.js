function calculator(num1, num2, sign) {
  if (typeof num1 === "string" || typeof num2 === "string") {
    return "unknown value";
  }
  if (sign === "*") {
    return num1 * num2;
  } else if (sign === "+") {
    return num1 + num2;
  } else if (sign === "-") {
    return num1 - num2;
  } else if (sign === "/") {
    return num2 / num1;
  } else {
    return "unknown value";
  }
}
console.log(calculator(1, 2, "+"));

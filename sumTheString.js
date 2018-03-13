function sumStr(a, b) {
  let num1 = parseInt(a);
  let num2 = parseInt(b);
  if (a === "" && b === "") {
    return "0";
  }
  if (a === "") {
    num1 = 0;
  }
  if (b === "") {
    num2 = 0;
  }
  return (num1 + num2).toString();
}
console.log(sumStr("1", "2"));

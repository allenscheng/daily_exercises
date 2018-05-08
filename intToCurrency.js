function toCurrency(price) {
  var price = price.toString().split("");

  for (var i = price.length - 3; i > 0; i -= 3) {
    price.splice(i, 0, ",");
  }

  return price.join("");
}
console.log(toCurrency("123456789"));

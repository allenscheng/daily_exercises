function fakeBinary(num) {
  var newNum = "";
  for (var i = 0; i < num.length; i++) {
    num[i] < 5 ? (newNum += 0) : (newNum += 1);
  }
  console.log(newNum);
}
fakeBinary("45385593107843568");

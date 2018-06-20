function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i] * arguments[i];
  }
  return Math.floor(Math.sqrt(total) / 2);
}
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

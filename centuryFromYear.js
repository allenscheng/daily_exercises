function centuryFromYear(num) {
  var century = 0;
  for (var i = num; i > 0; i -= 100) {
    century++;
  }
  return century;
}
console.log(centuryFromYear(2000));

function centuryFromYear2(num) {
  return Math.ceil(num / 100);
}
console.log(centuryFromYear2(2100));

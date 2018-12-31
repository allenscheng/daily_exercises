function toCamelCase(str) {
  var casedStr = [];

  if (str == '') {
    return '';
  } else if (str.includes('_')) {
    var splitStr = str.split('_');
    console.log(splitStr[1].substring(1, splitStr[1].length));
    for (var i = 0; i < splitStr.length; i++) {
      if (i == 0) {
        casedStr.push(splitStr[i]);
      } else {
        casedStr.push(splitStr[i][0].toUpperCase() + splitStr[i].substring(1, splitStr[i].length));
      }
    }
  } else {
    var splitStr = str.split('-');

    for (var j = 0; j < splitStr.length; j++) {
      if (j == 0) {
        casedStr.push(splitStr[j]);
      } else {
        casedStr.push(splitStr[j][0].toUpperCase() + splitStr[j].substring(1, splitStr[j].length));
      }
    }
  }
  return casedStr.join('');
}
console.log(toCamelCase('the_stealth_warrior'));
console.log(toCamelCase("The-Stealth-Warrior"));
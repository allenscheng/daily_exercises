function tickets(peopleInLine) {
  var a25 = 0,
    a50 = 0;
  for (var i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      a25 += 1;
    }
    if (peopleInLine[i] === 50) {
      a25 -= 1;
      a50 += 1;
    }
    if (peopleInLine[i] === 100) {
      if (a50 === 0 && a25 >= 3) {
        a25 -= 3;
      } else {
        a25 -= 1;
        a50 -= 1;
      }
    }
    if (a25 < 0 || a50 < 0) {
      return "NO";
    }
  }
  return "YES";
} // YES
console.log(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100]));
// NO
// console.log(tickets([25, 100]));

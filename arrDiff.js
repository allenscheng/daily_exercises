function arrDiff(a, b) {
  var newArr = [];
  if (a.length === 0) {
    return [];
  } else if (b === []) {
    return a;
  } else {
    for (var i = 0; i < a.length; i++) {
      if (a[i] !== b) {
        newArr.push(a[i]);
      }
    }
  }
  return newArr;
}
console.log(arrDiff([1, 2], [1]));

function arrDiff2(a, b) {
  var newArr = [];
  if (a.length <= 0 || b.length <= 0) {
    newArr = a;
  } else {
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < b.length; j++) {
        if (a[i] !== b[j]) {
          newArr.push(a[i]);
        }
      }
    }
  }
  return newArr;
}
console.log(arrDiff2([1, 2, 2], []));

function arrayDiff2(a, b) {
  return a.filter(num => !b.includes(num));
}
console.log(arrayDiff2([3, 4, 4], [4]));

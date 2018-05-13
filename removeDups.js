function distinct(a) {
  var distincts = [];
  var objDistincts = {};
  for (var i = 0; i < a.length; i++) {
    if (objDistincts[a[i]] === a[i]) {
      objDistincts[a[i]]++;
    } else {
      objDistincts[a[i]] = 1;
    }
  }
  for (var key in objDistincts) {
    distincts.push(parseInt(key));
  }
  return distincts;
}
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));

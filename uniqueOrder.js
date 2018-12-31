function uniqueOrder(iterable) {
  if (iterable == '') {
    return [];
  }
  if (typeof iterable == 'string') {
    iterable = iterable.split('');
  }
  var letter = iterable[0];
  var unique = [];
  unique.push(letter);
  for (var i = 1; i < iterable.length; i++) {
    if (iterable[i] !== letter) {
      letter = iterable[i]
      unique.push(iterable[i])
    }
  }
  return unique;
}
console.log(uniqueOrder('AAAABBBCCDAABBB'))
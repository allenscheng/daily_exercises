function accum(s) {
  let mumble = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        mumble += s[i].toUpperCase();
      } else {
        mumble += s[i].toLowerCase();
      }
    }
    if (i < s.length - 1) {
      mumble += "-";
    }
  }
  return mumble;
}
console.log(accum("abcd"));

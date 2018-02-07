function maxRot(n) {
  let greatest = n;
  let split = n.toString().split("");
  let length = split.length;
  for (let i = 0; i < length; i++) {
    let newSplice = split.splice(i, 1);
    let int = parseInt(newSplice);
    let spliced = split.splice(length - 1, 0, int);
    let joined = split.join("");
    console.log(joined);
    if (joined > greatest) {
      greatest = joined;
    }
  }
  return parseInt(greatest);
}
console.log(maxRot(56789));

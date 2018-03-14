function duplicateCount(text) {
  text = text.toLowerCase();
  let maxVals = [];
  let obj = {};
  for (let i = 0; i < text.length; i++) {
    if (obj[text[i]] === undefined) {
      obj[text[i]] = 1;
    } else {
      obj[text[i]] += 1;
    }
  }
  for (let keys in obj) {
    if (obj[keys] > 1) {
      maxVals.push(keys);
    }
  }

  return maxVals.length;
}
console.log(duplicateCount("AaBbcd"));

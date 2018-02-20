function findNeedle(arr) {
  return "found the needle at position " + arr.indexOf("needle");
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));
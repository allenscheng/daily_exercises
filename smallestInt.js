function findSmallestInt(args) {
  var smallestInt = args[0];
  for (var i = 1; i < args.length; i++) {
    if (args[i] < smallestInt) {
      smallestInt = args[i];
    }
  }
  return smallestInt;
}
console.log(findSmallestInt([34, 15, 88, 2]));
console.log(findSmallestInt([34, -345, -1, 100]));

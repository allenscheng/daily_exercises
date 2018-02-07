var gimme = function(inputArray) {
  let sorting = inputArray.slice().sort(function(a, b) {
    return a - b;
  })[1];
  console.log(sorting);
  return inputArray.indexOf(sorting);
};
console.log(gimme([5, 10, 14]));

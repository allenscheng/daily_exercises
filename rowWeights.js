function rowWeights(array) {
  var team1 = [];
  var team2 = [];
  for (var i = 0; i < array.length; i++) {
    i % 2 === 0 ? team1.push(array[i]) : team2.push(array[i]);
  }
  return [
    team1.reduce((acc, curr) => acc + curr, 0),
    team2.reduce((acc, curr) => acc + curr, 0)
  ];
}
console.log(rowWeights([20, 10, 30, 40]));

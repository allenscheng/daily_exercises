function number(busStops) {
  let occupants = 0;
  for (let i = 0; i < busStops.length; i++) {
    for (let j = 0; j < busStops[i].length; j++) {
      if (j === 0) {
        occupants += busStops[i][j];
      } else {
        occupants -= busStops[i][j];
      }
    }
  }
  return occupants;
}
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));

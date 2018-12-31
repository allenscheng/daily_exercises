function elevatorDistance(array) {
  var distanceTraveled = 0;

  for (var i = 0; i < array.length -1; i++) {
    var currentTravel = 0;

    if (array[i] !== array[i + 1]) {
      currentTravel = (array[i + 1] - array[i]);
      currentTravel < 0 ? currentTravel *= -1 : currentTravel *= 1;
      distanceTraveled += currentTravel;
    }
  }
  
  return distanceTraveled;
}
console.log(elevatorDistance([5, 2, 8]));
console.log(elevatorDistance([24, 23, 23, 10]));
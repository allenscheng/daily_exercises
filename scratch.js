function scratch(lottery) {
  var winnings = 0;

  for (var i = 0; i < lottery.length; i++) {
    var lottoSplit = lottery[i].split(' ');

    for (var j = 1; j < lottoSplit.length - 1; j++) {
      var match = false;
      var targetAnimal = lottoSplit[0];

      if (targetAnimal == lottoSplit[j]) {
        match = true;
      } else {
        match = false;
        break;
      }
    }
    if (match) {
      winnings += Number(lottoSplit[3]);
    }
  }
  
  return winnings;
}
console.log(scratch(["horse horse horse 100", "rat sheep rat 5", "cock monkey tiger 100", "snake snake sheep 5", "horse snake dragon 1000", "dog dog cock 10000"]))
function cakes(recipe, available) {
  var result = [];
  for (var prop in recipe) {
    var availableProp = available[prop] || 0;
    var recipeProp = recipe[prop] || 0;
    if (recipeProp > 0) {
      result.push(Math.floor(availableProp / recipeProp));
    }
  }
  return Math.min.apply(Math, result);
}
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);

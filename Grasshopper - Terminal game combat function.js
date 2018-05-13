function combat(health, damage) {
  return damage > health ? 0 : health - damage;
}
console.log(combat(20, 30));
console.log(combat(100, 5));

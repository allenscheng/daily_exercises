class Sleigh {
  authentication(person, password) {
    return person === "Santa Claus" && "Ho Ho Ho!" === password;
  }
}
var sleigh = new Sleigh();
console.log(sleigh.authentication("Santa Claus", "Ho Ho Ho!"));

function abbreviate(name) {
  var initials = "";
  name = name.split(" ");
  return (initials +=
    name[0][0].toUpperCase() + "." + name[1][0].toUpperCase());
}
console.log(abbreviate("Sam Harris"));
console.log(abbreviate("Patrick Feeney"));

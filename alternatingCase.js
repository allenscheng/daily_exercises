String.prototype.toAlternatingCase = function() {
  var str = "";
  for (var i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      str += this[i].toLowerCase();
    } else if (this[i].toLowerCase()) {
      str += this[i].toUpperCase();
    } else {
      str += this[i];
    }
  }
  return str;
};

console.log("1a2b3c4d5e".toAlternatingCase());
console.log("hElLo WoRlD".toAlternatingCase());
console.log("sNaKe".toAlternatingCase());


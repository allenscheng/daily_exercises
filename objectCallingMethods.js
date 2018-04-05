let math = {
  add: function(num) {
    return num + num;
  },
  sub: function(num) {
    return num - 2;
  }
};
console.log(math.add(math.sub(6)));

// below is an object
let user1 = {
  name: "Jane",
  age: 30
};
// assign a function to the object user
user1.sayHi = function() {
  console.log("HI!");
};
// user1.sayHi(); // the call to sayHi method in user object

// below is an object that shows shorthand method
let user2 = {
  name: "Jane",
  age: 30,
  // below is a short hand to write methods in an object
  sayHiShorthand() {
    console.log("HI!");
  }
};
// };
// user2.sayHiShorthand();

// javascript 'this'
let user3 = {
  name: "Jane",
  age: 30,
  say() {
    console.log("hi" + " " + this.name);
    // 'this' accesses the name property inside user3 object
    // can only access properties inside this object, not global
  }
};
let s1 = user3;
// s1.say();

let user = {
  name: "John",
  hi() {
    console.log(this.name);
  },
  bye() {
    console.log("Bye");
  }
};

// user.hi(); // John (the simple call works)

// now let's call user.hi or user.bye depending on the name
// console.log(user.name == "John" ? user.hi : user.bye)(); // Error!
// 'this' gets lost in the transtion of the ternary operation

// OBJECT CALCULATOR
let calculator = {
  num1: 1,
  num2: 2,
  read: function() {
    //num1 = prompt("first num");
    // num2 =prompt("second num");
  },
  sum: function() {
    return this.num1 + this.num2;
  },
  mul: function() {
    return this.num1 * this.num2;
  }
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

let calculator2 = {
  total: 0,
  one: 1,
  two: 2,
  sum() {}
};
console.log(calculator2.one);

// # Replicate the folowing method chains.
// # one.plus.one.equals => 2
// # one.plus.two.equals => 3
// # one.minus.one.equals => 0
// # one.minus.one.plus.one => 1
// # one.plus.ten.minus.five => 6

// # I will not chain 2+ Operands together
// # I will not chain 2+ Operators together

// # puts one.plus.one.equals # => 2

// CHANING METHODS CALLS
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    // shows the current step
    console.log(this.step);
    return this;
  }
};

// ladder
//   .up()
//   .up()
//   .down()
//   .showStep(); // 1

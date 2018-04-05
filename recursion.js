// Write a recursive function that prints out the word "INCEPTION" 15 times.
function word(num) {
  if (num > 0) {
    console.log("INCEPTION");
    word(num - 1);
  }
}
// word(15);

// Write a recursive function that prints out all even numbers from 0 to 100.
function counting(num) {
  if (num <= 100) {
    if (num % 2 === 0) {
      console.log(num);
    }
    counting(num + 1);
  }
}
// counting(0);

// Write a recursive function that adds the sum of all numbers from 1 to 1000.
let sumNum = 0;
function sumOfNum(num) {
  if (num <= 1000) {
    sumNum += num;
    sumOfNum(num + 1);
  }
  return sumNum;
}
// console.log(sumOfNum(0));

// Write a recursive function that accepts an array of numbers and returns the sum.
function arrSum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + arrSum(array.slice(1));
  }
}
// console.log(arrSum([1, 2, 3]));

// Write a recursive function that accepts a number and returns its factorial.
let factorial = 1;
function fact(num) {
  if (num >= 1) {
    factorial *= num;
    fact(num - 1);
  }
  return factorial;
}
// console.log(fact(5));

// Fibonacci numbers are numbers that follow this pattern: 1, 1, 2, 3, 5, 8, 13, 21, 34, ... that is, each number is the sum of the two immediate numbers that precede it. Write a recursive function that prints out the list of fibonacci numbers up to 987.
let fiboNum = 1;
function fibo(num) {
  if (num <= 987) {
    console.log(fiboNum);
    fiboNum += num;
    fibo(num + fiboNum);
  }
  // console.log(fiboNum);
}
console.log(fibo(0));

// Write a recursive function that reverses a string.
// let revString = "";
// function reverseString(str) {}
// console.log(reverseString("Hello"));
// 3. Write a recursive function that accepts two numbers (a numerator and denominator), and returns the remainder if you divide the numerator by the denominator. The catch: Do not use the modulo operator!
// 4. Write a recursive function that accepts two numbers and calculates one by the power of the other. For example, if the numbers were 2 and 5, it would calculate 25. Do not use any built-in power operations provided by your computer language.

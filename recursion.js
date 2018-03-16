// Write a recursive function that prints out the word "INCEPTION" 15 times.
function word(num) {
  if (num > 0) {
    console.log("INCEPTION");
    word(num - 1);
  }
}
word(15);

// Write a recursive function that prints out all even numbers from 0 to 100.
function counting(num) {
  if (num <= 100) {
    if (num % 2 === 0) {
      console.log(num);
    }
    counting(num + 1);
  }
}
counting(0);

// Write a recursive function that adds the sum of all numbers from 1 to 1000.
let sumOdds = 0;
function sumOfOdds(num) {
  if (num <= 1000) {
    if (num % 2 !== 0) {
      sumOdds += num;
    }
    sumOfOdds(num + 1);
  }
  return sumOdds;
}
console.log(sumOfOdds(0));

// Write a recursive function that accepts an array of numbers and returns the sum.
function arrSum(array) {
  if (array.length === 0) {
    return 0;
  } else {
    return array[0] + arrSum(array.slice(1));
  }
}
console.log(arrSum([1, 2, 3]));

// Write a recursive function that accepts a number and returns its factorial.
let factorial = 1;
function fact(num) {
  if (num >= 1) {
    factorial *= num;
    fact(num - 1);
  }
  return factorial;
}
console.log(fact(5));

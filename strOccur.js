// function strOccur(str) {
//   var occObj = {};
//   var letter = "";
//   var maxValue = 0;
//   for (var i = 0; i < str.length; i++) {
//     occObj[str[i]] ? occObj[str[i]]++ : (occObj[str[i]] = 1);
//   }
//   for (var j in occObj) {
//     if (occObj[j] > maxValue) {
//       maxValue = occObj[j];
//       letter = j;
//     }
//   }
//   console.log(
//     "The most occured letter is: " +
//       letter +
//       " with a value of: " +
//       maxValue +
//       ".",
//     occObj
//   );
//   // return occObj;
// }
// strOccur("hello");

var containsDuplicate = function(nums) {
  var obj = {};
  var dups = false;
  for (var i = 0; i < nums.length; i++) {
    obj[nums[i]] ? (obj[nums[i]] += 1) : (obj[nums[i]] = 1);
  }
  for (var j in obj) {
    if (obj[j] > 1) {
      return (dups = true);
    }
  }
  return dups;
};
console.log(containsDuplicate([1, 1, 3]));

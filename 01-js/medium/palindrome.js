/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let arr = str.toUpperCase().split("")
  let filteredArr = arr.filter(val => val != " " && val != "," && val != "." && val!="!" && val!="?");
  let reversedArr = [...filteredArr].reverse();
  
  // console.log(filteredArr.join(""));
  // console.log(reversedArr.join(""))
  return filteredArr.join("") === reversedArr.join("");
  // return str === str.split("").reverse().join("");
}

console.log(isPalindrome("Able, was I ere I saw Elba!"));
module.exports = isPalindrome;

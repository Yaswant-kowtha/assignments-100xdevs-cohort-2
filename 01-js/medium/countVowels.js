/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let upperCase = str.toUpperCase().split("");
    let count = 0;
    upperCase.forEach(element => {
      if(element == "A" || element == "E" || element == "I" || element == "O" || element == "U"){
        count += 1;
      }
    });
    return count;
}

module.exports = countVowels;
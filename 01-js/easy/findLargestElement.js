/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = undefined;
    numbers.forEach(element => {
        if(element > largest) {
            largest = element;
        } else if(largest == undefined) {
            largest = element;
        }
    });
    return largest;
}

module.exports = findLargestElement;
/**
 * Array.pop(), This method removes the last element in an array and returns
 * that element. It leaves you with a shorter array.
*/

console.log("\n******** pop() *******");
const numArray = [1, 2, 3, 4, 5];

// if the array is empty, it returns undefined
var elem = numArray.pop();

console.log(numArray); // [1, 2, 3, 4];
console.log(elem); // 5

/**
 * the Array.shift() method removes the first element of 
 * that array and returns the removed element
 * 
 * similar to array.pop(), except here it removes
 * the element from the beginning of the array.
*/

console.log("\n******** shift() *******");

const elements = [0, 1, 2, 3, 4, 5];
// if the array is empty, it returns undefined
elem = elements.shift()

console.log(elements) // [1, 2, 3, 4, 5];
console.log(elem) // 0
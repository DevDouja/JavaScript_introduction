/**
 * It is used to find the first element in an array that meetsa particular
 * criterion and returns its position(index) in the array.
 * 
 * Array.findIndex() is great when you want to get the position of the first 
 * element of an array that meets a particular criterion
*/
console.log("\n******** find the first even number *******");
// index     0  1  2  3  4  5  6 
const arr = [1, 3, 5, 6, 7, 8, 9];

// Array.find returns the element
const even = arr.find(num => num%2 === 0);
console.log(even); //6

console.log("\n******** find the position of the first even number *******");
// Array.findIndex returns the elements position in the array.
const evenIndex = arr.findIndex(num => num%2 === 0);
console.log(evenIndex); //3
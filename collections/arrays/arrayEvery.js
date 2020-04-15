/**
 * This method checks that every element in an array passes the
 * specified test and returns true to that effect. 
 * 
 * In Array.some(), while the loop is running, if it returns true then the loop ends
 * and the remaining elements are not processed. Similarly for Array.every(), 
 * if the method returns false at some point in the iteration, the loop ends
 * and the remaining methods are not processed.
 */


/**
 * we have an array of [2, 4, 5, 6, 8] and we want to check if all the elements
 * in the array are even numbers.
*/
console.log("\n******** If every number in the array es a even number?  *******");
const arr = [2, 4, 5, 6, 8];
console.log(arr.every(num => num % 2 === 0)); // false

console.log("\n******** If every age in the array es <18 ? *******");
const ages = [8, 10, 9, 8, 12, 11];
console.log(ages.every(num => num < 18)); // true

/**
 * Array.every() is great when you want to check that every item in an array meets
 * a particular criterion. Alternative if you want to check that at least one
 * item in that array meets that criterion you should use array.some().
 */
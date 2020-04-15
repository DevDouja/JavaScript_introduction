/**
 * the Array.concat() array method in javascript. This method merges two arrays 
 * into a new array. It takes array1 & array2 and merges them into array3.
*/

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9];

const array3 = array1.concat(array2);
console.log("array3", array3) // [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("\n******** contact a string and an number *******");
//add a string and a number to an array
var frutas = ["Naranja", "kiwi", "Sandia", "Manzana", "Pera"];
const newFrutas = frutas.concat("s", 4);
console.log("newFrutas", newFrutas) // ["Naranja", "kiwi", "Sandia", "s", 4];


console.log("\n******** arraySpread *******");
const arraySpread = [...array1, ...array2];
console.log("arraySpread", arraySpread)
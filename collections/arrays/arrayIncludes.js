/**
 * Array.includes()
 * This method checks for a particular element in an array, if the element is found
 * it returns true else it returns false.
*/

var frutas = ["Naranja", "kiwi", "Sandia", "Manzana", "Pera", "Plátano"];

//In this scenario the startIndex is not provided so it defaults to zero and the search starts from the beginning of the array
console.log('The array include "kiwi": ', frutas.includes('kiwi')); //true
console.log('The array include "tomate": ', frutas.includes('tomate')); //false

//What happens if the startIndex is equal to or greater than the length of the array?
console.log("\n******** startIndex equal or greater than the length of the array *******");
console.log('The array includes kiwi: ', frutas.includes('kiwi',10)); //false
//In this scenario the array is not searched.

console.log("\n******** Array.includes() is case sensitive *******");
//What happens if Kiwi or kiWi is being searched for?
console.log('The array includes Kiwi: ', frutas.includes('Kiwi',)) // false
console.log('The array includes kiWi: ', frutas.includes('kiWi', 3)) // false
//Array.includes() is case sensitive.

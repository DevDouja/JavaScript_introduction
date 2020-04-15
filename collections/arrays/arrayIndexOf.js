/**
 * This method searches the array for a specified element and returns
 * the position, if this element does not exist it returns -1. 
*/


var frutas = ["Naranja", "kiwi", "Sandia", "Manzana", "Pera"];

//In this scenario the startIndex is not provided so it defaults to zero and the search starts from the beginning of the array
console.log('The postion of kiwi is: ', frutas.indexOf('kiwi')); //1
console.log('The postion of tomate is: ', frutas.indexOf('tomate')); //-1

console.log("\n******** provide a start value *******");
//What if we provide a start value that is not 0?
console.log('The postion of tomate is: ', frutas.indexOf('kiwi',3)); //-1

//What if the startIndex is equal to or greater than the length of the array?
console.log("\n******** startIndex equal or greater than the length of the array *******");
console.log('The postion of tomate is: ', frutas.indexOf('kiwi',10)); //-1
console.log('The postion of tomate is: ', frutas.indexOf('kiwi',frutas.length)); //-1

console.log("\n******** negative startIndex *******");
//What happens when we pass a negative value as the startIndex?

// startIndex = array.lentgth + (startIndex)
console.log('The postion of tomate is: ', frutas.indexOf('kiwi',-2)); //-1
console.log('The postion of tomate is: ', frutas.indexOf('kiwi',-4)); //1


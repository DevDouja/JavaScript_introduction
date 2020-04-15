
/**
 * Array.lastIndexOf()
 * This method searches the array for the last position(index) of a specified element, 
 * if this element does not exist it returns -1.
 * 
 * Array.lastIndexOf() starts its search from the right(end) of the array to the left 
 * of the array, for Array.indexOf(), the reverse is the case.
 */
var frutas = ["Naranja", "kiwi", "Sandia", "Manzana", "Pera", "Plátano", "kiwi"];

//In this scenario the startIndex is not provided so it defaults to zero and the search starts from the beginning of the array
console.log('The postion of kiwi is by indexOf: ', frutas.indexOf('kiwi')); //1
console.log('The postion of kiwi is by lastIndexOf: ', frutas.lastIndexOf('kiwi')); //6

//What if the startIndex is equal to or greater than the length of the array?
console.log("\n******** startIndex equal or greater than the length of the array *******");
console.log('The postion of tomate is: ', frutas.lastIndexOf('kiwi',10)); //6
console.log('The postion of tomate is: ', frutas.lastIndexOf('kiwi',frutas.length)); //6
//In this scenario the whole array will be searched.

console.log("\n******** negative startIndex *******");
//What happens when we pass a negative value as the startIndex?

// startIndex = array.lentgth + (startIndex) but it starts searching backwards right->left
console.log('The postion of tomate is: ', frutas.lastIndexOf('kiwi',-7)); //-1
console.log('The postion of tomate is: ', frutas.lastIndexOf('kiwi',-4)); //1
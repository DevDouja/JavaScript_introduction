/**
 * Array.prtotype.push() 
 * This method adds new items to the end of the array and
 * returns the new length of the array.
 */
console.log("\n******** push()*******");
var frutas = ["Naranja", "kiwi", "Sandia", "Manzana", "Pera"];
//push devuelve el length nuevo del array
var elementos = frutas.push("Aguacate");
console.log("elementos", elementos);
console.log("frutas", frutas);

/**
 * Array.prtotype.unshift() 
 * his method adds a new element or a bunch of elements to the
 * start of the array and returns the new length of the array.
*/
console.log("\n******** unshift() *******");
const arr = [2, 3, 4, 5];
arr.unshift([0, 1]);
console.log(arr); // [[0, 1], 2, 3, 4, 5];
/**
 * For ... Loop
 * A for ... loop repeatedly performs the specified statement until a specified
 * condition evaluates to false.
 */

console.log("\n******** For ... Loop *******");
// Print the word `congratulation` to the console 5 times

//   initial exp  condition   incerement/decrement exp
for (let i = 0;    i < 5;          i += 1 ) {
// statement  
console.log("\ncongratulation!!!");
}

/**
 * For ... of Loop
 * This creates a loop over any iterable object such as strings, arrays, maps,
 * sets, etc. It iterates over the property values of any given iterable.
 * 
 * Think of a For of Loop like this. For every item of this array do x to it,
 * where x is the statement you want to execute on it.
 */
console.log("\n******** For ... of Loop *******");
// Print the word `congratulation` to the console 5 times

const animals = ["Cat", "Poni", "dragón", "pigeon"];
for (let animal of animals) {
    console.log(animal)
}


/**
 * For ... in Loop
 * This creates a loop over the enumerable properties of any iterable object. 
 * It iterates over the property names of any given iterable. It follows 
 * a similar syntax as the For of loop but with an in keyword instead
 * of the of keyword.
 */

/**
 * At this point, it may seem like the For ... of and For ... in Loop is not 
 * different but there is. For ... of Loop iterates over the property value
 * of any iterable object while For ... in Loop iterates over the property
 * name of any iterable object
 */

console.log("\n******** For ... in Loop *******");
const items = [55, 2, "móvil"];
// add a property to the array
items.type = "IT-products";
console.log("items", items)


// For ... in Loop
for (let item in items) {
 console.log(item) // "0", "1", "2", "type"
}
// It logs the property names of the array

// For ... of Loop
console.log('\nFor ... of Loop');
for (let item of items) {
 console.log(item) // 1, 2, "móvil"
}
// It logs the property values of the array

/**
 * Array.prototype.ForEach
 * The forEach() method executes a specified function once for each element in an array, in
 * the way they are ordered. You are probably wondering if this is not similar to the 
 * usual for ... loop. The difference is that in for ... loops you can specify the 
 * number of times you want the iteration to run whereas when using the forEach 
 * loop on default the loops runs as many times as there are elements 
 * in the array.
*/

// Log items of the array to the console
console.log("\n******** Iterate array by forEach *******");
const frutas = ["Naranja", "kiwi", "Sandia", "Manzana", "Pera"];
frutas.forEach(frutas => console.log(frutas));


console.log("\n******** Iterate array with forEach to create object *******");
const animalsNames = ["duck","panther","Rabbits"];
const animalsType = ["pet","wild","pet-wild"];
const animalsObject = {};

animalsNames.forEach((animal, index) => {

    const key = animalsType[index];
    animalsObject[key] = animal;
});

console.log("animalsObject", animalsObject);



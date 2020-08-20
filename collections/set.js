/**
 * Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden 
 * de su inserción.Un valor en un Set sólo puede estar una vez; éste es único en la
 * colección Set.
 * 
 * El objeto Set permite almacenar valores únicos de cualquier tipo,
 * incluso valores primitivos u referencias a objetos.
 * 
 * utilizamos un set cuando necesitamos una colección donde no se repitan los elementos
 * y no importa el orden en que se guardan los elementos
 */

console.log("************ Creación de un set ************")
const set = new Set();

/**
 * add(value)
 * Appends value to the Set object. Returns the Set object.
 */
set.add("vida");
set.add(true);
set.add("palmera");
set.add(() => 1);
set.add(2005);
set.add(19.5);



console.log(set);

//size: contiene el número de valores del Set.
console.log("\n******** size *******");
console.log("El número de los elementos del set: ", set.size);

/**
 * has(key)
 * Returns a boolean asserting whether an element is 
 * present with the given value in the Set object or not.
 */
console.log("\n******** has() *******");
console.log("¿El valor vida existe en el set?  ", set.has("vida"));

/**
 * values()
 * Devuelve un nuevo objeto Iterador que contiene los valores para cada
 * elemento en el objeto Set en orden de inserción.
 */
console.log("\n******** values() *******");
const setValues = set.values();
console.log(setValues);


console.log("\n******** delete() *******");
//Removes the element associated to the value 
set.delete(true);
console.log(set);

/**
 * entries()
 * Devuelve un nuevo objeto  Iterador que contiene un array de [valor, valor] 
 * para cada elemento en el objeto  Set en orden de inserción.
 */
console.log("\n******** enteries() *******");
//entries(): devuelve un iterable con matrices [value, value].
//This is similar to the Map object, so that each entry's key is the same as its value for a Set.
console.log(set.entries());

/**
 * forEach(callbackFn[, thisArg])
 * Calls callbackFn once for each value present in the Set object, in insertion order.
 * If a thisArg parameter is provided, it will be used as the this value for each
 * invocation of callbackFn.
 */
console.log("\n******** forEach() *******");
set.forEach(element => {
    console.log(element);
});

 /**
  * keys()
  * Returns a new Iterator object that yields the values for each element in the Set 
  * object in insertion order. (For Sets, this is the same as the values() method.)
  */
 console.log("\n******** keys() *******");
 const setKeys = set.keys();
 console.log(setKeys);

 //El método clear() elimina todos los elementos de un objeto Set.
console.log("\n******** clear() *******");
set.clear();
console.log(set);


// with spread

const uniqueNames = [...new Set(["lina","sara","miriam"])];
console.log(uniqueNames);



 













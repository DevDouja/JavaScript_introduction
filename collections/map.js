/** Map
 * El objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos)
 * pueden ser usados como clave o valor
 * 
 * new Map([iterable])
 * iterable: Iterable es un array o cualquier otro objeto iterable cuyos elementos son pares clave-valor
 * (arrays de 2 elementos). Cada par clave-valor será agregado al nuevo Map.
*/

console.log("\n******** creación de un map *******");
const map = new Map();

/**
 * set(key, value)
 * Establece un valor para la llave en el objeto Map. Devuelve el objeto  Map.
 */
map.set("name", "khadija");
map.set("age", "28");
map.set("color", "read");
map.set("job", "programmer");
console.log(map);

/**
 * en los objetos las claves sólo pueden ser cadenas de texto.
 * En los objetos Map cualquier elemento, incluidos los objetos como matrices o funciones,
 * pueden ser claves para localizar valores.
*/

console.log("\n******** una función como clave *******");

//una función como clave
map.set(()=> {}, "soy el valor de una clave como función");
console.log(map);

//size: contiene el número de valores en el mapa.
console.log("\n******** size *******");
console.log("El número de los elementos del map: ",map.size);

/**
 * Map.prototype.entries()
 * Devuelve un nuevo objeto  Iterador que contiene un array de [llave, valor] 
 * para cada elemento en el objeto  Map en orden de inserción.
 */
console.log("\n******** enteries() *******");
//entries(): devuelve un iterable con matrices [key, value].
console.log(map.entries());

console.log("\n******** delete() *******");
//Elimina cualquier valor asociado a la llave 
map.delete("age");
console.log(map);

/** 
 * Un objeto Map puede iterar sobre sus elementos en orden
 * de inserción. Un bucle for..of devolverá un array de [clave, valor] en cada iteración.
 */

 /**
  * forEach(callbackFn[, thisArg])
  * Llama a la callbackFn una vez por cada conjunto llave/valor presentes en cada objeto  
  * Map, en orden de inserción. Si se le proporciona un parámetro thisArg a forEach,
  * se usará como valor "this" para cada callback.
  */
 console.log("\n******** forEach() *******");
 map.forEach(element => {
     console.log(element);
 });

 /**
  * values()
  * Devuelve un nuevo objeto Iterador que contiene los valores para cada
  * elemento en el objeto Map en orden de inserción.
  */
 console.log("\n******** values() *******");
 const mapValues = map.values();
 console.log(mapValues);

 /**
  * keys()
  * Devuelve un nuevo objeto Iterador que contiene las llaves para cada elemento
  * en el objeto Map en orden de inserción.
  */
 console.log("\n******** keys() *******");
 const mapKeys = map.keys();
 console.log(mapKeys);

/**
 * get(key)
 * Devuelve el valor asociado a la  llave, o undefined si no tiene ninguno.
 */
console.log("\n******** get() *******");
console.log("El valor de la clave name: ", map.get("name"));

/**
 * has(key)
 * Devuelve un booleano que indica si un valor se ha asociado a la llave 
 * en el objeto Map o no se ha asociado.
 */
console.log("\n******** has() *******");
console.log("¿la clave name tiene valor?  ", map.has("name"));

//El método clear() elimina todos los elementos de un objeto Map.
 console.log("\n******** clear() *******");
 map.clear();
 console.log(map);

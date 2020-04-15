/** Arrays, arreglos, matrices
 * Una  matriz o array es un conjunto ordenado de valores al que se
 * refiere con un nombre y un índice. 
 * 
 * JavaScript no tiene un tipo de dato de array explícito por eso en
 * un array se puede guardar cualquier tipo de datos
 */
//Las matrices se construyen con corchetes, que contiene una lista de elementos separdos por comas.

console.log("\n******** creación de un array *******");
var frutas = ["Naranja", "kiwi", "Sandia", "Manzana", "Pera",true,22,19.5,'Tomate','Uvas',function(){console.log('soy una fruta')}];

var lenguajes = new Array("PHP","JAVA","JavaScript");

console.log("Las frutas son: ",frutas);
console.log("\nLos lenguajes son: ",lenguajes);
console.log("\nEl lenjuaje en el índice 2 es :",lenguajes[2]);

/**
 * push()
 * Añade uno o más elementos al final de una matriz unidimensional
 * y retorna la nueva longitud de una matriz unidimensional.
 */
console.log("\n******** agregar elementos a un array*******");
//push devuelve el length nuevo del array
var elementos = frutas.push("Aguacate");
console.log("elementos", elementos);
console.log("frutas", frutas);

//reverse an array
console.log("\n******** Array.prototype.reverse *******");
var reversedLenguajes = lenguajes.reverse();
console.log("reversedLenguajes", reversedLenguajes)
console.log("lenguajes", lenguajes)




//length: Refleja el número de elementos en una matriz unidimensional.
console.log("\n El array frutas tiene", frutas.length, "elementos.");

/**
 * The length property also allows us to modify the size of an array by setting its length.
 * This can be done initializing the length of the array to any numerical value
 */

// Decreasing the size of the array.
frutas.length = 9; // length = 9
console.log("frutas", frutas)
//we can also increase the length of an array

//Recorrir los indices
console.log("\n******** For in *******");
for (const key in frutas) {
    console.log(key);
}

//Recorrir los valores
console.log("\n******** For of *******");
for (const fruta of frutas) {

    console.log(fruta);
}

/**
 * continue en bucles
 * Sirve para volver al principio del bucle en cualquier momento,sin
 * ejecutar las líneas que haya por debajo de la palabra continue.
*/
console.log("\n******** continue *******");
for (const fruta of frutas) {

    if(fruta == 'kiwi'){
        continue;
    }
    console.log(fruta);
}

/**
 * break en bucles
 * Se detiene un bucle utilizando la palabra break. Detener un bucle significa
 * salirse de él y dejarlo todo como está para continuar con el flujo del
 * programa inmediatamente después del bucle
*/
console.log("\n******** break *******");
for (const fruta of frutas) {

    if(fruta == 'Sandia'){
        break;
    }
    console.log(fruta);
}

/**
 * Array.from()
 * Crea un nuevo Array de un objeto iterable o parecido a un array.
 */
console.log("\n******** Array.from() *******");
// un string es un objeto iterable
 const name = "khadija";
 console.log(Array.from(name));

/**
 * Array.prototype.fill()
 * 
 * The .fill() function as the name implies, basically returns an array filled with
 * the specified value from the start index(0) to the end index(length of array).
 */
console.log("\n******** Array.prototype.fill() *******");

const filledArray = Array(5).fill(6);
console.log(filledArray); // [6, 6, 6, 6, 6]

/**
 * The .fill() method accepts three arguments, which are the value to be filled, the
 * start index and the end index to be filled.
 */
const characters  = Array(5).fill('a', 2) // [b, z', 'a', 'a', 'a']
console.log("\ncharacters", characters);


/**
 * Array.of()
 * The .of() is similar to the Array() method that we use in creating arrays. The only
 * difference is that here the arguments passed is treated as the actual
 * elements of the array
 */
console.log("\n******** Array.of() *******");
//Think of the Array.of() method as this "Create an array x of these values a,b,c,d..."
const arr1 = Array.of(7); // [7] 
console.log("arr", arr1)
const arr2 = Array.of(7, 'nedy', 7); // [7, "nedy", 7]
console.log("arr2", arr2)
const arr3 = Array.of();  // []
console.log("arr3", arr3)

// Difference between Array() and Array.of()
const arr4 =  Array(2) // [undefined, undefined]
console.log("arr4", arr4)

/**
 * Array.from()
 * This method returns a new array from any array-like object(an object with a length property),
 * iterable object(objects where you can get its elements, such as Map and Set). 
 * It is basically saying "Make an array .from() this object".
 */
console.log("\n******** Array.from() *******");
const arrF1 = Array.from('56'); // ["5", "6"]
console.log("arrF1", arrF1)
const arrF2 = Array.from(56); // []
console.log("arrF2", arrF2)
const arrF3 = Array.from('nedy'); // ["n", "e", "d", "y"]
console.log("arrF3", arrF3)
// Array from a Set
const arrayFromSet = Array.from(new Set([1, "nedy", 5])); // [1, "nedy", 5]
console.log("arrayFromSet", arrayFromSet)
// Array from a Map
const arrayFromMap = Array.from(new Map([[2, 2], ['nedy', 'ned']])); //[[2, 2], ["nedy", "ned"]]
console.log("arrayFromMap", arrayFromMap)

console.log("\n********  passing the function as an argument *******");
const numbers1 = Array.from([1, 3, 5], elem => elem + 1); // [2, 4, 6]
console.log("numbers1", numbers1)
const numbers2 = Array.from(Array(5), (elem, index) => index + 1); // [1, 2, 3, 4, 5]
console.log("numbers2", numbers2)

console.log("\n********  work same as Array.from *******");
const argsArray = [...'nedy']; // ["n", "e", "d", "y"]
console.log("argsArray", argsArray)

console.log("\n******** mapping *******");
const arrMapping = [...'nedy'].map(elem => elem + "o"); // ["no", "eo", "do", "yo"]
console.log("arrMapping", arrMapping)

console.log("\n******** filtering *******");
const arrFiltering = [...'nedy'].filter(elem => elem !== "e"); // ["n", "d", "y"]
console.log("arrFiltering", arrFiltering)


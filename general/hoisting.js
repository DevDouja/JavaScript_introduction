/**
 *El concepto de Hoisting fue pensado como una manera general de referirse a cómo
 *funcionan los contextos de ejecución en JavaScript.
 *las declaraciones de variables y funciones son asignadas en memoria
 *durante la fase de compilación, asi que se puede acceder a ellas y utilizarlas incluso 
 *antes de sus declaraciones.
 */


/**
 * Una de las ventajas en JavaScript de colocar (ponerlas en memoria) las declaraciones 
 * de funciones antes de ejecutar cualquier otro segmento de código es que permite 
 * utilizar una función antes de declararla en el código
 */
console.log("\n******** funciones *******");

console.log( nombreDelGato("Mimi"));

function nombreDelGato(nombre) { 
console.log("El nombre de mi gato es " + nombre);
}

console.log("\n******** variables *******");

var x = 5;

(function () {
    var x; // Se elevo la declaración
    /**
     * El resultado es undefined porque hemos vuelto a declarar x dentro
     * de la función que es una variable distinta local y propia de la función
     * y porque JavaScript sólo utiliza el hoisting en declaraciones y no 
     * en inicializaciones
     */
    console.log("x:", x); // undefined
    x = 10;
    console.log("x:", x); // 10
}());
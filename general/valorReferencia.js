/**
 * Cuando asignamos valores primitivos (Boolean, Null, Undefined, Number, String y Symbol),
 * el valor asignado es una copia del valor que estamos asignando. Pero cuando asignamos 
 * valores NO primitivos o complejos (Object, Array y Function), JavaScript copia
 * “la referencia”, lo que implica que no se copia el valor en sí, si no 
 * una referencia a través de la cual accedemos al valor original.
 */

console.log('*******\n Asignando valores primitivos *******');
let a = 'Bienvenido';
let b = a; // asignamos valor de `a` a `b`.
a += '!'; // cambiamos valor de `a` añadiendo ! al final

/**
 * la variable b es una copia de la variable a
 * las variables se mantienen independientes.Cada variable guarda su propia
 * valor
 */
console.log('El valor de la variable a: ',a); // Bienvenido!
console.log('El valor de la variable b: ',b); // Bienvenido

console.log('*******\n Asignando valores complejos *******');
const list1 = [25, true, 4.5];
//El valor en sí no se copia, lo que se asigna es una referencia.
const list2 = list1;
/**
 * cuando modificamos el valor de cualquiera de las variables (list1 ó list2) estamos
 * afectando al mismo valor, y los cambios se verán reflejados en ambas.
 */
list1.push('cat');
console.log('El valor de la variable list1: ',list1); // [25, true, 4.5,'cat']
console.log('El valor de la variable list2: ',list2);// [25, true, 4.5,'cat']

/** Pasando valores a una función
 * Cuando pasamos un valor primitivo como argumento a una función, el valor que recibimos dentro
 * de la función es siempre una “copia”, lo que implica que cualquier mutación o re-asignación
 * de los parámetros dentro de una función no afecta al valor en el contexto de invocación
 * (fuera de la función).
 */
console.log("\n******** Pasando valores primitivos *******");
function square(numero){
    return numero*numero;
}
var numero = 4;
console.log(square(numero));
console.log(numero);

/**
 * Si pasa un objecto (p. ej. un valor no primitivo, como un Array o un objeto definido por el
 * usuario) como parámetro, y la función cambia las propiedades del objeto, este cambio sí
 * es visible desde afuera de la función
 */
console.log("\n******** Pasando valores complejos *******");
function myFunc(theObject) {
theObject.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};

myFunc(mycar);
  
// y toma el valor "Toyota"
// (la propiedad make fue cambida por la funcion)
myFunc('El objeto mycar: ',mycar);
console.log('El valor de mycar.make: ',mycar.make);

/**
 * para evitar efectos colaterales (⚠️), normalmente evitamos modificar
 * directamente los valores de los argumentos pasados a una función. 
*/
console.log("\n******** Pasando valores complejos: copiar el objeto explícitamente *******");

function myFuncCopie(theObject) {
    // hacemos una copia del objeto
    var objeto = Object.assign({},theObject);
    objeto.make = 'Toyota';
}

var mycar = {make: 'Honda', model: 'Accord', year: 1998};

myFuncCopie(mycar);
    
// no toma el valor "Toyota"
// (la propiedad make fue cambida por la funcion)
myFunc('El objeto mycar: ',mycar);
console.log('El valor de mycar.make: ',mycar.make);
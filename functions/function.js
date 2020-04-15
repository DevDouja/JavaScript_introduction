/**
 * Las funciones son uno de los pilares fundamentales en JavaScript. 
 * Una función es un procedimiento en JavaScript—un conjunto de 
 * sentencias que realizan una tarea o calculan un valor. 
 * Para usar una función, debe definirla en algún 
 * lugar del ámbito desde el cual desea llamarla.
 */

 //definición de una función
function square(numero){
    return numero*numero;
}

/**Pasando valores a una función
 * 
 * Los parámetros primitivos (como puede ser un número) son pasados a las funciones por valor;
 * el valor es pasado a la función, si la función cambia el valor del parámetro, este cambio 
 * no es reflejado globalmente o en otra llamada a la función.
 */
console.log("\n******** Pasando valores primitivos *******");
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
var x, y;
  
x = mycar.make;     // x toma el valor "Honda"
  
// y toma el valor "Toyota"
// (la propiedad make fue cambida por la funcion)
myFunc('El objeto mycar: ',mycar);
console.log('El valor de mycar.make: ',mycar.make);

/**
 * se puede asignar a una variable un función
 * un función puede también ser creada por una expresión de función. 
 * Tal función puede ser anónima; no debe tener un nombre
 */
console.log("\n******** Variable función *******");
var square = function(number) {return number * number};
console.log("La definición de la función: ",square);
console.log(square(4));

/**
 * se puede proporcionar un nombre a una expresión de función, y éste 
 * puede ser utilizado dentro de la función para referirse a sí misma.
 */
console.log("\n******** función llama a su misma *******");
var factorial = function fac(n) {
    return n<2 ? 1 : n*fac(n-1)
};
console.log(factorial(3));

/**
 * Las expresiones de función son convenientes cuando se pasa una función 
 * como argumento a otra función. 
 */
console.log("\n******** recibir una function como argumento *******");
function mutar(myfunction,myArray) {
    var result = [], // Crea un nuevo Array
    i;
    for (i = 0; i != myArray.length; i++)
      result[i] = myfunction(myArray[i]);
    return result;
  }

var sumar = function(x) { return x + 10;} //Expresión de funcion
console.log(mutar(sumar, [0, 10, 22, 105, 11]));

/**
 * En JavaScript, una función puede ser definida en base a una condición. 
 * Por ejemplo, la siguiente definición de función sayHello es definida
 * sólo si valido es true
 */
var valido = true;
console.log("\n******** definir una función en base de una condición *******");
var sayHello;
if(valido){
    sayHello = function(nombre){
        console.log('Hola',nombre,'!');
    }
}

sayHello('khadija');

/**
 * Las variables definidas dentro de una función no pueden ser accedidas desde ningún
 * lugar fuera de la función, ya que la variable está definida sólo en el ámbito 
 * de la función. Sin embargo, una función puede acceder a todas las variables
 * y funciones definidas dentro del ámbito en el cual está definida
 */
console.log("\n******** ámbito de una función *******");
// Las siguientes variables están  definidas en el ámbito global
var num1 = 100,
    num2 = 5,
    nombre = "María";

// Esta función se define en el ámbito global
function multiplicar() {
  return num1 * num2;
}

console.log('Resultado variables ámbito global: ',multiplicar()); // Retorna 500

// Un ejemplo de función anidada
function obtenerSuma() {
  var num1 = 4,
      num2 = 50;
  
  function agregar() {
    return nombre + " suma " + (num1 + num2);
  }
  
  return agregar();
}

console.log('Resultado variables ámbito local: ',obtenerSuma()); // Retorna "María suma 54"

/**
 * Se puede anidar una función dentro de una función. La función anidada (interna) es
 * privada a su función contenedora (externa).
 * 
 * La función interna sólo se puede acceder a partir de sentencias 
 * dentro de la función externa.
 * 
 * La función interna forma un cierre: la función interna puede utilizar los argumentos
 * y variables de la función externa, mientras que la función externa no puede
 * utilizar los argumentos y las variables de la función interna.
 */
console.log("\n******** Función interna *******");
function addSquares(a,b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
console.log(addSquares(2,3));

/**
 * Dado que la función interna forma un cierre, se puede llamar a 
 * la función externa y especificar argumentos para ambas, tanto
 * para la función externa como para la interna:
 */
console.log("\n******** Función interna: acceso a variables y argumentos *******");
function outside(x) {
    function inside(y) {
        return x + y;
    }
    return inside;
}
fn_inside = outside(3); 
console.log('Llamada en dos lineas: ', fn_inside(5)); // retorna 8

console.log('Llamada en una sola línea: outside(3)(5) ', outside(3)(5)); // retorna 8

/**
 * Cuando dos argumentos o variables en los ámbitos de un cierre tienen el mismo nombre, 
 * ocurre un conflicto de nombre. Los ámbitos más internos toman precedencia
 */
console.log("\n******** Funcióm interna: Conflícto de nombres *******");
function Animales() {
    var x = 'dog';
    function getAnimal(animal) {
      return animal;
    }
    return getAnimal;
  }
  result = Animales()('cat'); // retorna 'cat' en lugar de 'dog'
  console.log(result);

  /**
   * se puede devolver un objeto que contiene métodos para manipular las variables 
   * internas de la función externa.
   */
  console.log("\n******** función interna: devolver un objeto *******");
  var createPet = function(name) {
    var sex;
    
    return {
      setName: function(newName) {
        name = newName;
      },
      
      getName: function() {
        return name;
      },
      
      getSex: function() {
        return sex;
      },
      
      setSex: function(newSex) {
        if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
          sex = newSex;
        }
      }
    }
  }
  
  var pet = createPet("Vivie");
  console.log('El objeto devuelto',pet);
  console.log(pet.getName());      // Vivie
  pet.setName("Oliver"); 

  pet.setSex("female");  
  console.log(pet.getSex());      //female
  console.log(pet.getName());     //oliver
  
/**
 * Los argumentos de una función son mantenidos en un objeto similar a un array.
 * 
 * Usando el objeto arguments, se puede llamar una función con más argumentos de 
 * los que formalmente fueron declarados que puede aceptar.
 */
console.log("\n******** arguments[i] *******");
function myPets(separator) {

  console.log('Number of aguments', arguments.length);
  var result = "", // initialize list
      i;
  // iterate through arguments
  for (i = 1; i < arguments.length; i++) {
     result += arguments[i] + separator;
  }
  return result;
}

console.log(myPets("-", "elephant", "giraffe", "lion", "cheetah"));
console.log(myPets(", ", "hippopotamus", "horse", "kitten", "kangaroo","lobster","monkey"));

/**
 * En JavaScript, los parámetros de funciones están establecidos por defecto a undefined. 
 * Sin embargo, en ciertas situaciones puede ser útil establecerlos
 * a un valor suministrado por defecto diferente. 
 */
console.log("\n******** Parámetro por defecto *******");
function multiply(a, b = 1) {
  return a*b;
}

console.log(multiply(5));

/**
 * El operador rest en realidad sirve para obtener cualquier
 * número de parámetros de una forma estructurada, mediante un array de valores
 */
console.log("\n******** Parámetros rest *******");
function listadoFrutas(fruta1, fruta2, ...Restofrutas){
	console.log("Fruta1:" +fruta1);
	console.log("Fruta2:" +fruta2);
	console.log("Resto de Frutas:" + Restofrutas);
}

listadoFrutas("Naranja","Banana","fresa","Sandía","Manzana");
/**
 * Spread se utliza para enviar un array como parámetro y recibir los elementos
 * del array como valores separados (argumentos) de la función
 */
console.log("\n******** Operador spread *******");

var frutas = ["Pera","Kiwi"];

listadoFrutas(...frutas,"fresa","Manzana");

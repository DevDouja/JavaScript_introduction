/**
 * El scope puede definirse como el alcance que una variable tendrá en tu código.
 * En otras palabras, el scope decide a qué variables tienes acceso en cada
 * parte del código. Existen dos tipos de scope, el scope global y el scope local.
*/

//Se dice que una variable está en el sope global cuando está declarada fuera de una función o de un bloque. 
var animal = 'cat';
console.log(animal);

/**
 * Cuando puedes acceder a una variable únicamente en cierta parte del código, se dice que
 * esa variable está declarada en el scope local. Estas también son conocidas como
 * variables locales. Un ejemplo de esto es cuando una variable está declarada
 * dentro de un bloque o una función. Si tratas de acceder a esta variable
 * fuera de esta función o bloque, tendrás un error que dirá que
 * la variable no está definida.
 */
console.log("\n******** Scope Local bloque: let *******");
//variable global
let name;
if(true){
  //Cuando declaramos una variable let o const dentro de un bloque, el alcance o scope que tendrá será sólo dentro de ese bloque.
  let name = 'Sara';
  console.log('soy una variable local de scope bloque',name);
}
// es undefined porque como no se puede acceder a la variable name local
console.log('soy la variable global fuera del bloque',name);

console.log("\n******** Scope Local bloque: var *******");
//variable global
var coche;
if(true){
  // en este caso no se considera una variable local porque está declarada con var
  var coche = 'Seat';
  console.log('soy una variable local de scope bloque',coche);
}
// es undefined porque como no se puede acceder a la variable name local
console.log('soy la variable global fuera del bloque',coche);

/**
 * Las variables definidas dentro de una función no pueden ser accedidas desde ningún
 * lugar fuera de la función, ya que la variable está definida sólo en el ámbito 
 * de la función. Sin embargo, una función puede acceder a todas las variables
 * y funciones definidas dentro del ámbito en el cual está definida
 */
console.log("\n******** funciones: Scope global *******");

// Las siguientes variables están  definidas en el ámbito global
var num1 = 100,
    num2 = 5;

// Esta función se define en el ámbito global
function multiplicar() {
  return num1 * num2;
}

console.log('Resultado variables ámbito global: ',multiplicar()); // Retorna 500

console.log("\n******** funciones: Scope local *******");

// Las siguientes variables están  definidas en el ámbito global
var temporada;

// Esta función se define en el ámbito global
function getTemporada() {
    // es una variable local y no se puede acceder desde fuera
    var temporada = 'primavera';
    console.log('soy la variable local de un función:', temporada);
}
getTemporada();

console.log('soy la variable global fuera de la función:', temporada); // Retorna 500


console.log("\n******** Scope objeto *******");

miAlumno = { 

    nombre : 'María',
    edad : '23',
    imprimete : function(){ 
      // this representa el objeto: el scope de este objeto 
      console.log("Nombre: " + this.nombre) 
      console.log("\nEdad: " + this.edad)  
    },

    getScope: function() {
        //La solución es guardar el this en una variable así no se pierde
        var self = this;
        console.log(this);
        (function(){
            // En la funciones ánonimas el this se pierde
            console.log('\n******************************************************');
            console.log('El this actual que es windows',this);
            console.log('\n******************************************************');
            console.log('El this guardado anteriormente',self);
        })();
    }
  } 
   
  miAlumno.imprimete();
  console.log(miAlumno.getScope());
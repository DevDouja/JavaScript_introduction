/**
 * utilizar la notación de corchetes con for ... in 
 * para iterar sobre todas las propiedades enumerables de un objeto
 */

console.log('\n******** Creación Objeto ********');
var dress = new Object();
dress.type = 'gown';
dress.color = 'red';
dress.size = 'M'
dress.available = true;

console.log('El vestido es de color', dress['color']);

console.log('\n******** Las propiedades de un objeto ********');
function mostrarPropiedades(objeto, nombreObjeto) {
    var resultado = ``;
    for (var i in objeto) {
      //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
      if (objeto.hasOwnProperty(i)) {
          resultado += `${nombreObjeto}.${i} = ${objeto[i]}\n`;
      }
    }
    return resultado;
}

console.log(mostrarPropiedades(dress,'dress'));

console.log('\n******** Creación Objeto 2 ********');

//definimos el método matricularte para la clase AlumnoUniversitario 
function matriculate(num_matricula){ 
  this.numMatricula = num_matricula 
} 

//definimos el método imprimete para la clase AlumnoUniversitario 
function imprimete(){ 
console.log("Nombre: " + this.nombre) 
console.log("\nEdad: " + this.edad) 
console.log("\nNúmero de matrícula: " + this.numMatricula) 
} 

//definimos el constructor para la clase 
function AlumnoUniversitario(nombre, edad){ 
  this.nombre = nombre 
  this.edad = edad 
  this.numMatricula = null 
  this.matriculate = matriculate 
  this.imprimete = imprimete 
} 

//creamos un alumno 
miAlumno = new AlumnoUniversitario("Khadija",23) 

//le pedimos que se imprima 
console.log('\n******** Antes de la matriculación********');
miAlumno.imprimete();

//le pedimos que se matricule 
console.log('\n******** Después de la matriculación********');
miAlumno.matriculate(1005) 

//le pedimos que se imprima de nuevo (con el número de matricula relleno) 
miAlumno.imprimete();

console.log('\n******** Converte an object to string ********');
//converte an object to a string
var myObject = {favoriteFood: "Pizza", hobby: "Coding"};
console.log(JSON.stringify(myObject));

console.log('\n******** make an object from a string ********');
// we can make an object from a string by using JSON.parse
var myString = '{"favoriteFood":"Pizza","hobby":"Coding"}';
console.log(JSON.parse(myString));
// logs {favoriteFood: "Pizza", hobby: "Coding"}

console.log('\n******** get all keys of an object ********');
// with Object.keys
var myFriend = {
  firstName: 'María',
  lastName: 'Salvador',
  age: 27,
  nationality: 'Spanish',
  sayHi: function() {
      alert('Hi!');
  },
  introduce: function() {
      alert('My name is ' + this.firstName + ' ' + this.lastName + ". I'm " + this.nationality + " and I'm " + this.age + ' years old.');
  }
};

console.log( Object.keys(myFriend) );
// logs ["firstName", "lastName", "age", "nationality", "sayHi", "introduce"]

console.log('\n******** get all values of an object ********');
// with Object.values which  it simply makes an array of all the values in an object.
console.log( Object.values(myFriend) );

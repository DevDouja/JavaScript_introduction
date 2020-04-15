/**
 * el valor de "this" dentro de una función no depende de cómo
 * se define esa función, sino de cómo se invoca.
 */

 /**
  * Si yo coloco código fuera de cualquier función y trato de 
  * ver el contenido de this, encontraré el contexto global
  */
 console.log("\n******** El this global *******");
 console.log(this);

 /**
  * Si ahora escribes el código de una función y dentro accedes a "this", 
  * lo que encontrarás es el "propietario de la función". Pero esto del
  * "propietario" es un poco complicado de entender, porque
  * básicamente pueden ocurrir dos cosas:
  * 
  * Si la función se ejecuta como global, "this" será el propio objeto global.
  * Si la función se ejecuta como método de un objeto, entonces "this" es el
  * objeto que está recibiendo este método.
  */

 miAlumno = { 
    nombre : 'María',
    edad : '23',
    imprimete : function(){ 
      // this representa el objeto: el scope de este objeto 
      console.log("Nombre: " + this.nombre) 
      console.log("\nEdad: " + this.edad)  
    },

    getScopeObject : function(){
        console.log('El this dentro de una función definida dentro de un objeto', this);
    } 
  } 

  function getThisFunction() {
    console.log('El this dentro de una función definida en el scope globale',this);
  }

console.log("\n******** this function: llamada en el scope de un objeto *******");
miAlumno.getScopeObject();
console.log("\n******** this function: llamada en el scope global *******");
getThisFunction();


/**
 * 
 * 
 */
console.log("\n******** this dentro de un objeto *******");
var obj = {
  nombre: "Edu",
  apellidos: "Tomas",
  completo: this.nombre + " " + this.apellidos
  }
/**
 * el resultado es undefined undefined (undefined+undefined) porque
 * en ese lugar, "this" es el objeto global, ya que no se ha ejecutado
 * dentro de una función como método de un objeto.
 */
console.log(obj.completo);
/**
 * Te devuelve undefinded porque en el contexto global (objeto "window" teniendo
 * en cuenta que eso se ejecutase en un navegador) "window.nombre"
 * no existe y tampoco "window.apellidos" y si accedemos a una
 * propiedad inexistente de un objeto, Javascript nos devuelve 
 * el valor "undefined".
 */
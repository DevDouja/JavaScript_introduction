
/**
 * El método call() llama a una función con un valor this asignado como primer
 * argumento y después argumentos indeviduales
 */
console.log("\n******** Function.prototype.call *******");

function Human(gender,job) {
    this.gender = gender;
    this.isAlive = true;
    this.job = job
}

function Person(gender, age, job) {
    // this = {}
    Human.call(this, gender,job);
    // this = { gender: 'male', isAlive: true, job: fisherman}
    this.age = age;
    // this = { gender: 'male', isAlive: true, job: fisherman, age: 18 }
    return this;
}

/**
 * llamamos a la función Person a la cual le pasamos primero un objeto vacío como this,
 * y a continuación los argumentos necesarios por la función
 */
const alberto = Person.call({}, 'male', 18, 'fisherman');

console.log(alberto);

/**
 * El método apply() invoca una determinada función asignando explícitamente
 * el objeto this y un array.
 * la sintaxis y el uso de esta función es casi idénticos a call(), la diferencia fundamental
 * es que call() acepta una lista de argumentos, mientras que apply()
 * acepta un simple array
 */

console.log("\n******** Function.prototype.apply *******");
var estudiante = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

var estudianteInfo = {
    firstName:"John",
    lastName: "Doe"
}
console.log(estudiante.fullName.apply(estudianteInfo, ["Oslo", "Norway"]));
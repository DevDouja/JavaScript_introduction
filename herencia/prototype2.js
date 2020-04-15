/**Pseudoclassical Instantiation.
 * when you invoke a function using the new keyword, an object that is created is
 * called this is created and is returned implicitly.
 * referencia: tutorial_prototype
 */

function Animal (name, energy) {
    // const this = Object.create(Animal.prototype)
    var self = this;
    this.name = name;
    this.energy = energy;

    //return animal
  }
  
  Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  
  Animal.prototype.sleep = function (length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
  
  Animal.prototype.play = function (length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }
  
  const leo = new Animal('Leo', 7)
  const snoop = new Animal('Snoop', 10)
  console.log('leo: ', leo);
  console.log('snoop: ',snoop);

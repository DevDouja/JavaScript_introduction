/**
 * Array Prototype
 * This gives us the ability to add new properties and methods to our array object. 
 * All arrays then created will be given these properties and methods on default.
 */

// initializing an `initialz` property
Array.prototype.initialz = function() {
    for (let i = 0; i < this.length; i+=1) {
      this[i] = this[i].charAt(0).toUpperCase();
    }
  };
  
  let name ="jana kamar"
  name = name.split(" ")
  // since name is an array we can call the initialz() on it
  name.initialz();
  console.log(name)


/**
 * sugar manner to create an object using keyWord Class of EcmaScript
 * referencia: tutorial_prototype: static Methods
 */

/**
 * if we had a method that was important to the Class,but
 * didn't need to be shared across instances we have to
 * we have to create it as a static method
 */
class Animal {
    constructor(name, energy) {
      this.name = name;
      this.energy = energy;
    }

    eat(amount) {
      console.log(`${this.name} is eating.`)
      this.energy += amount;
    }

    sleep(length) {
      console.log(`${this.name} is sleeping.`)
      this.energy += length;
    }

    play(length) {
      console.log(`${this.name} is playing.`)
      this.energy -= length;
    }

    //static method: it's not defined in the Animal.prototype
    static nextToEat(animals) {
        const sortedByLeastEnergy = animals.sort((a,b) => {
          return a.energy - b.energy;
        })
    
        return sortedByLeastEnergy[0].name;
    }
  }
  
  const leo = new Animal('Leo', 7);
  const snoop = new Animal('Snoop', 10);
  const mimi = new Animal('Mimi', 20);


  console.log('leo: ', leo);
  console.log('snoop: ',snoop);
  console.log('mimi: ',mimi);


  /**
   * because we added nextToEat as a static property on the class, it lives
   * on the Animal class itself (not its prototype) and can be accessed
   * using Animal.nextToEat.
   */

  //leo.nextToEat(); //error

  console.log(Animal.nextToEat([leo, snoop])); //leo

/**
 * getting that object's prototype can be accomplished using the
 * Object.getPrototypeOf method.
 */
  
console.log('Animal.prototype:', Object.getPrototypeOf(leo));

/**
 * the prototype object  have a constructor property which points to
 * the original function or the class(Animal) that the instance
 * was created from. Which mean that any instances will be
 * able to access their constructor via instance.constructor.
 */
console.log('Constractor of Animal:', leo.constructor);

//Determining if a property lives on the prototype
console.log("\n******** Properties of leo: Animal *******");
for(let key in leo) {
   
   //console.log(`Key: ${key}. Value: ${leo[key]}`)

   if (leo.hasOwnProperty(key)) {
       console.log(`Key: ${key}. Value: ${leo[key]}`)
   }
}

/**
 * Check if an object is an instance of a Class with istanceof
 */
console.log("\n******** check if an leo is an instance of a Animal *******");
console.log(leo instanceof Animal);
/**
 * The way that instanceof works is it checks for the presence of constructor.
 * prototype in the object's prototype chain. In the example above, 
 * leo instanceof Animal is true because:
 * 
 * Object.getPrototypeOf(leo) === Animal.prototype
 */

console.log("\n******** Arrow function *******");
/**
 * Arrow functions don't have their own this keyword. As a result, arrow functions
 * can't be constructor functions and if you try to invoke an arrow function 
 * with the new keyword, it'll throw an error
 */

const Car = () => {}
//const leo = new Animal()  Error: Animal is not a constructor

// arrow functions also don't have a prototype property.
console.log(Car.prototype);

/**
 * When we invoke a method of an object .Automatically is searched in this object if
 * it doesn't exist, it will be search in the prototype of the object ...
 */
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    personInfo(){
        console.log('Class: Person');
        return `the person's name is ${this.name}, 
                their age is ${this.age}`
    }
}

 class Student extends Person {
     constructor(name, age, course, year ){
        super(name, age);
        this.course = course;
        this.year = year;
     }

     studentInfo(){
        console.log('Class: Student');
        return `the student's name is ${this.name}, 
                their age is ${this.age},
                they studies ${this.subject},
                in ${this.year} `
     }
 } 

let student = new Student('Jana','18','spanish',2020);
console.log(`This student is called ${student.name}`);

console.log(student.personInfo());

console.log(student.studentInfo());
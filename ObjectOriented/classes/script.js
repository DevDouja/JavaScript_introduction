class User {
  constructor(username, email){
    // this.username = 'lina';
    this.username = username;
    this.email = email;
  }
}

const userOne = new User('lina', 'lina@gmail.com');
const userTwo = new User('sara', 'sara@gmail.com');

console.log(userOne, userTwo);

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object
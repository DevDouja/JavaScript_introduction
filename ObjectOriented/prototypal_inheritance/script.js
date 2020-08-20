function User(username, email){
  this.username = username;
  this.email = email;
}

User.prototype.login = function(){
  console.log(`${this.username} has logged in`);
  return this;
};

User.prototype.logout = function(){
  console.log(`${this.username} has logged out`);
  return this;
};

// admin
function Admin(username, email, title){
  User.call(this, username, email);
  this.title = title;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user){
    users = users.filter(u => u.username !== user.username);
    return this; // allow method chaining
};

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object

const userOne = new User('sara', 'sara@gmail.com');
const userTwo = new User('lina', 'lina@gmail.com');
const userThree = new Admin('miriam', 'miriam@gmail.com', 'adventurous');

console.log(userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);
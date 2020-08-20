class User {
  constructor(username, email){
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login(){
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout(){
    console.log(`${this.username} just logged out`);
    return this;
  }
  incScore(){
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

class Admin extends User {
  constructor(username, email, title){
    super(username, email);
    this.title = title;
  }
  deleteUser(user){
    users = users.filter(u => u.username !== user.username);
    return this; // allow method chaining
  }
}

const userOne = new User('sara', 'sara@gmail.com');
const userTwo = new User('lina', 'lina@gmail.com');
const userThree = new Admin('miriam', 'miriam@gmail.com', 'adventurous');

console.log(userOne, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);
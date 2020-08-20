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

const userOne = new User('sara', 'sara@gmail.com');
const userTwo = new User('lina', 'lina@gmail.com');

console.log(userOne);
userOne.login().logout();
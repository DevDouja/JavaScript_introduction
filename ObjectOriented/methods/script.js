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

const userOne = new User('Lina', 'luigi@gmail.com');
const userTwo = new User('Sara', 'sara@gmail.com');

// userOne.login();
// userOne.logout();
// userTwo.login();
// userTwo.logout();

userTwo.login()
  .incScore()
  .incScore()
  .logout();
const userOne = {
  username: 'lina',
  email: 'lina@gmail.com',
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  }
};

console.log(userOne.email, userOne.username);
userOne.login();

const userTwo = {
  username: 'sara',
  email: 'sara@gmail.com',
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  }
};
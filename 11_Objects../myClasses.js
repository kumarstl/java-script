// After---> ES6

// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encryptpassword(){
//         return`${this.password}abc`
//     }
//     Changeusername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const sourav=new User("sourav","sourav@.com","123")
// console.log(sourav.encryptpassword());
// console.log(sourav.Changeusername());

//-->Behind The scene..

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// prototype method
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

// prototype method
User.prototype.changeUsername = function () {
  return this.username.toUpperCase();
};

// object create
const kumar = new User("kumar", "kumar@gmail.com", "987");

// use methods
console.log(kumar.encryptPassword()); // 987abc
console.log(kumar.changeUsername());  // KUMAR






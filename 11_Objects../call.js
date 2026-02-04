function setUsername(username){
    // Complex DB Calls..
    this.username = username
    console.log("called");
    
    

}

function createUser(username,email,password){
    setUsername.call(this,username)

    this.email=email
    this.password=password

}

const sourav=new createUser("sourav","sourav@.com","123")
console.log(sourav);

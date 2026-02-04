//-->Object literal

const user={
    username:"sourav",
    loginCount:5,
    SignedIn:true,

    getUserDetails:function(){
        // console.log("Got User Details from Databasr..");
        // console.log(`Username:${this.username}`);
        // console.log(this);
        
        
        
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//--> Constructor Funcation

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function(){
        console.log(`Welocome ${this.username}`);
        
    }

    return this
}
const userOne= new User("Hey_Sourav",15,true)
const userTwo= new User("Hey_Kumar",10,false)

console.log(userOne);
console.log(userTwo);




//#Primitive
// 7 Types:string; Number; Boolean; Null; Undefined; Symbol;BigInt
//Integer datatype

const score =100
const scorevalue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId=('123')

console.log(id===anotherId);

// const bigNumber=4874454664645351n

// #Reference: (Non primitive)

// Array,Objects,Funcation

const heros =["shaktiman","naagraj","doga"]

let myobj={
    name:"sourav",
    age:22,
}

const myfuncation=function(){
    console.log("Hello sourav");   
}
 //console.log( typeof outsideTemp);


 //----------------------Stack(Primitive),Heap (NOn Primitive)


 let myname ="souravkumar.com"
 let anothername = myname
 anothername="kumar"


//  console.log(myname);
//  console.log(anothername);
 

let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userone

usertwo.email="souravkr@gmail.com"
console.log(userone.email);
console.log(usertwo.email);




 
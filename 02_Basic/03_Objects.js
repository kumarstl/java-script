//Singleton......
//Object.create

//Object Literals..

const mysym=Symbol("key1")

const jsuser={
    name:"sourav",
"full name":"sourav kumar",
[mysym]:"mykey1",
    age: 21,
    location:"New-Delhi",
    Email:"souravgoogle.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}
// console.log(jsuser.Email);
// console.log(jsuser["Email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mysym]);


jsuser.Email="sourav@chatgpt.com"
//Object.freeze(jsuser)
jsuser.Email="sourav@microsoft.com"
//console.log(jsuser);


jsuser.greeting=function(){
    console.log("Hello JS User");
}


jsuser.greetingTwo=function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());




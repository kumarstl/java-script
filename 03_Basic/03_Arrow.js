const user ={
    username:"sourav",
    price:999,

    WelcomeMessage:function(){
        console.log(`${this.username},Welcom to Website`);
        console.log(this);
        
    }
}

// user.WelcomeMessage()
// user.username="kumar"
// user.WelcomeMessage()

//console.log(this);

// function chai (){
//     let username="sourav"
//     console.log(this.username);
    
// }

// chai()



// const chai = function(){
//     let username ="sourav"
//     console.log(this.username);
    
// }
// chai()

//--Arrow Funcation....

const chai = () =>{
    let username ="sourav"
   // console.log(this.username);
    
}
//chai()


  
//  const addtwo = (num1,num2) =>{
//     return num1+num2
//  }
//  console.log(addtwo(2,4));
 

// const addtwo = (num1,num2) => num1+num2

// const addtwo = (num1,num2) => (num1+num2)

const addtwo = (num1,num2) =>({username:"sourav"})

 
console.log(addtwo(2,4));
 

// const Myarray=[5,6,8,2]
// Myarray.forEach()
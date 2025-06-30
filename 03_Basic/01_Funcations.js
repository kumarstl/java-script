
function myName(){
// console.log("s");
// console.log("o");
// console.log("u");
// console.log("r");
// console.log("a");
// console.log("v");

}
//myName()


// function addTwoNumber(number1,number2){  //parameter

//     console.log(number1+number2);
   
// }

function addTwoNumber(number1,number2){  

    // let result=number1+number2
    //     return result
    return number1+number2
   
}
const result=addTwoNumber(5,9)   

//console.log("Result",result);


function loginUserMessage(username="sourav"){
    if(!username){

        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("sourav"));
//console.log(loginUserMessage("kumar sourav"));
 


function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000));

const user={
username:"sourav",
price:199
}

function handleObject(anyobject){
console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)
handleObject({
    username:" kumar",
    price:499
})
const myNewArray =[200,400,100,600]

function returnSecondvlaue(getArray){
return getArray[1]
}
//console.log(returnSecondvlaue(myNewArray));
console.log(returnSecondvlaue([200,400,500,2000]));


function myName(){
console.log("s");
console.log("o");
console.log("u");
console.log("r");
console.log("a");
console.log("v");

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
console.log(loginUserMessage("kumar sourav"));
 
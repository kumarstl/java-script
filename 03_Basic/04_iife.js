//Immediately Invoked Funcation Expression(IIFE)

(function chai (){
    //Named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
}) ('sourav')
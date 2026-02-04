// let myName= "Sourav    "
// let lastName= "kumar    "

// console.log(myName.trueLength);


let myHeros= ["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.sourav=function(){
    console.log(`sourav is parsent in all objects`);
    
}

Array.prototype.heysourav=function(){
    console.log(`Hey Sourav`);
    
}
// heroPower.sourav()
// myHeros.sourav()
// myHeros.heysourav()
// heroPower.heysourav()

//--->Inheritance

const User={
    name:"sourav",
    email:"sourav@123.com",
}

const Teacher={
    makevideo:true,
}
const TeachingSupport={
    isAvailables:false,
}

const TASupport={
    makeAssignment:'JS Assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User;

// Modern Syntex-->
Object.setPrototypeOf(TASupport,Teacher)


let anotherUsername="MilkWala"

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is:${this.trim().length}`);    
}

anotherUsername.trueLength()
"sourav".trueLength()
"ColdTea".trueLength()



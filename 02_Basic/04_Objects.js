//const tinderUser=new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="sourav"
tinderUser.isLoggedIn=false

//console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
fullname:{
    userfullname:{
        firstname:"sourav",
        lastname:"kumar"
    }
}

}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}


//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
//console.log(obj3);

const usres=[
    {
        id:1,
        email:"sourav@.com",
    },
    {
        id:2,
        email:"sourav@.com"
    },
    {
        id:3,
        email:"sourav@.com"
    }
]

usres[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasownproperty('isLoggedIn'));


const course ={
    course:"Hindi",
    price:"999",
    courseInstructor:"sourav"
}

//course.courseInstructor

const {courseInstructor:instructor}=course
//console.log(courseInstructor);
console.log(instructor);

// {
//     "name":"sourav",
//     "coursename":"full stack"
//     "price":"free"
// }

[
    {},
    {},
    {}
]
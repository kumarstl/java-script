//  coding=["js","ruby","java","python","cpp"]

//  const values =coding.forEach( (item)=>{
// //console.log(item);
// return item

//  })
// console.log(values);
// -------------

//const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter( (num) =>{
// return num>4
// })
//console.log(newNums);

// -------->

// const newNums=[]
// myNums.filter( ()=>{
//     if (num>4) {
//         newNums.push(num)
//     }
// })
//console.log(newNums);


//Ex:->

const books=[
    { title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    { title:'Book Two',genre:'Non-Fiction',publish:1954,edition:2008},
    { title:'Book Three',genre:'History',publish:1999,edition:2014},
    { title:'Book Four',genre:'Non-Fiction',publish:1992,edition:2010},
    { title:'Book Five',genre:'Science',publish:1989,edition:1996},
    { title:'Book Six',genre:'Fiction',publish:2009,edition:2017},
    { title:'Book Seven',genre:'History',publish:2004,edition:2012},
    { title:'Book Eight',genre:'Fiction',publish:1987,edition:2004},
    { title:'Book Nine',genre:'History',publish:2000,edition:2016},
    { title:'Book Ten',genre:'Science',publish:1980,edition:2020},
    
];
let userBooks= books.filter( (bk)=>bk.genre==='History' )

userBooks =  books.filter( (bk) => {
     return bk.publish>=2000 && bk.genre==="History"
    })

console.log(userBooks);

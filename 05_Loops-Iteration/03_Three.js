//For of

//->["","",""] => Array to String..
//->[{},{},{}]=> Array to Object..

const arr=[1,2,3,4,5]

for (const num of arr) {
  //  console.log(num);
    
}

const greetings ="Hello Sourav"
for (const greet of greetings) {
   // console.log(`Each char is ${greet}`);
 
}

//->Map

const map = new Map()
map.set('IN',"India")
map.set('USA',"United state of America")
map.set('FR',"France")
map.set('IN',"India")

//console.log(map);


for (const [key,value] of map ) {
   // console.log(key,':->',value);
    
}
// =======>>

const myObject={
    'game1':'NFS',
    'game2':'spiderman'
}

// for (const [key,value] of myObject ) {
//    console.log(key,':->',value);
       
// }


// ----------

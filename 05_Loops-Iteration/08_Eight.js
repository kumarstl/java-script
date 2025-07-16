// //->Reduce

const myNums=[1,2,3,]

//  const mytotal=myNums.reduce(function(acc,currval){

//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc+currval
//  },0)
//  console.log(mytotal);
 
// Arrow funcation-->

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
//console.log(myTotal);


const ShoppingCart=[
    {
        itemName:"java-course",
        price:2999
    },
    {
        itemName:"python-course",
        price:3599
    },
    {
        itemName:"mobile-course",
        price:3999
    },
]

const priceToPay=ShoppingCart.reduce( (acc,item) => acc+item.price,0)
console.log(priceToPay);


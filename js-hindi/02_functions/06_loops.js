//for
// for (let i = 0; i < 10; i++) {
//     const element =i;
//     console.log(element);
    
// }

// for (let i = 1; i < 10; i++) {
//     console.log(`outer loop ${i}`);
    
//     for (let j = 1; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
    
// }

// break and continue

// for (let index = 0; index < 20; index++) {
//     if (index==5) {
//         console.log(`detected ${index}`);
//         break
//     }
//     console.log(` value is ${index}`);
    
// }

// for (let index = 0; index < 20; index++) {
//     if (index==5) {
//         console.log(`detected ${index}`);
//         continue
//     }
//     console.log(` value is ${index}`);
    
// }

// for of

// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     console.log(num)
// }

// Map

const map = new Map()
map.set("IN","Indian")
map.set("USA","United State Of America")
map.set("FR","France")

//console.log(map)
// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`)
// }

// objects

const myObjets = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby"
}

for (const key in myObjets) {
   // console.log(`${key} : ${myObjets[key]}`);
    
}

// foreach
 const coding = ['as','bs','cs','ds']
 coding.forEach( function(item){
    //console.log(item);
    
 })

 coding.forEach( (item)=>{
    //console.log(item);
 })

 function printMe(item){
    console.log(item);   
 }

 //coding.forEach(printMe)

 coding.forEach( (item, index, arr)=>{
    //console.log(`{item} index ${index}, array list ${arr}`)
 })

 // foreach for object inside array
 const myCoding=[
    {
        name:"shatrudhan",
        lastname:"kumar"
    },
    {
        name:"amit",
        lastname:"kumar"
    }
 ]

 myCoding.forEach( (item)=>{
    //console.log(item.name)
 })

 const muNum = [1,2,3,4,5,6,7,8,9]

 const newNum = muNum.filter((num)=> num>5)
 //console.log(newNum);

 const newnum2 = []
 muNum.forEach( (num)=>{
    if (num>5) {
       newnum2.push(num) 
    }
 })
 //console.log(newnum2);
 
 /// reduce

 const shoppingCart = [
    {
        itemName:"js course",
        price: 2999
    },
    {
        itemName:"php course",
        price: 2999
    },
    {
        itemName:"java course",
        price: 2999
    },
    {
        itemName:"python course",
        price: 2999
    },
 ]
 const total = shoppingCart.reduce( (acc,item)=>(acc+item.price),0)
 console.log(total)


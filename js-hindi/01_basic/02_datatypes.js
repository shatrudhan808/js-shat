"use strict"; // use all code as newer version 

// alert( 3 +4 ) // we are using node js not browser

let name = "starudhan"
let age = 30
let isLoggedin = false
let state;

// number => 2 to power 53
// bigint
// string=> ""
// boolean => ture/false
// null => standalone value
// undefined
// symbol => unique

// object

// console.log(typeof undefined)// undefined
// console.log(typeof null) // object

// +++++++++++++++++++++++++ memory ++++++++++
//  stack (premitive), heap (non premitive)
let myName = "shatrudhan"
let anotherName = myName
anotherName = "shat"

console.log(myName)
console.log(anotherName)

let userOne = {
    email :"shat@gmail.com",
    mobile: "234345678"

}
let userTwo = userOne

userTwo.email = {
    email:"newEanil@gmail.com",
}
console.log(userOne.email)
console.log(userTwo.email)



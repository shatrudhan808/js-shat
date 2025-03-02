// singleton
//Object.create

// object literals

const mySys = Symbol('key1')
const jsUser = {
    name:"shatrudhan",
    age: "30",
    [mySys]:'mykey1',
    email : "shat@gmail.com",
    isLoggedIn :false,
    lastLoginDays : ["sunday","monday"]
}
//console.log(jsUser)
// console.log(jsUser.isLoggedIn);
// console.log(jsUser[mySys])

//************************** singleton method */

const newUser = Object()
newUser.id = "123nfh"
newUser.name = "shatrudhan",
newUser.isLoggedIn = false
//console.log(newUser)

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userFullName:{
            firstname:"shatrudhan",
            lastname : "kumar"
        }
    }
}
// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName.firstname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}
//const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)
// obj3 = {...obj1, ...obj2}
// console.log(obj3)
//console.log(obj4)

const course = {
    name:"js devlopment",
    price : "999",
    courseTeacher :"shatrudhan"
}
console.log(course.price)
const {courseTeacher:inst}=course
console.log(inst);



function sayMayName(){
    console.log("s");
    console.log("h");
    console.log("a");
    console.log("t");
}
// sayMayName()
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// // }
// function addTwoNumbers(number1, number2){
//     // let result = number1 + number2
//     // return result
//     return number1 + number2
    
// }
// const result = addTwoNumbers(4,6)
// console.log("result: ",result)

function loginUserMessage(username){
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} is just logged in`
}
console.log(loginUserMessage("shayt"));

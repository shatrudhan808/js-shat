const accountId = 1123
let accountEmail = "shatrudhan@gmail.com"
var accountPassword  = "12345"
accountCity = "dinara"
let accountState;

// accountId = 2 not allowed

accountEmail = "newemail@gmail.com"
accountPassword  = "23456"
accountCity = "patna"
/*
Prefer not use to var
bacause of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
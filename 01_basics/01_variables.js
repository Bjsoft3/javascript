const accountId = 144552
let accountEmail = "bhagirath@gmail.com"
let accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // Not allowed

accountEmail = "devbj@test.com"
accountPassword = "001223"
accountCity = "Vadodara"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
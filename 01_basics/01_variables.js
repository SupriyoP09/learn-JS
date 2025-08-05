const accountId = 144553
let accountEmail = "abc@gmail.com"
var accountPassword = "1234"
accountCity ="mumbai"
let accountState;

//accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "goa"

console.log(accountId);

/*

prefer not to use var
beacuse of issue in block scope and functional scope

In JavaScript
 if you declare a variable but don’t assign any value to it
JavaScript considers it as undefined like the fouth value is undefined

*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
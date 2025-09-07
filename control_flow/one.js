// if statement

// const isUserLoggedIn = true
// const temperature = 32

// if (temperature == 40){
//     console.log("less then 40");
    
// }
// else {
//     console.log("temperature is greater than 40");
    
// }

// const score = 18
// if (score > 7){
//     let power = 'fly'
//     console.log(`User power: ${power}`);
    
// }

//     console.log(`User power: ${power}`);

// const balance = 1000

// if (balance < 500){

//     console.log("less than 500");
// } else if (balance < 777){

//     console.log("less than 777");
// } else if (balance < 1200){

//     console.log("less than 1200");
// } 

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true


if (userLoggedIn && debitCard){
    console.log("Allow to buy");
    
}
if (LoggedInFromGoogle || LoggedInFromEmail ){
    console.log("User logged in");
    
}
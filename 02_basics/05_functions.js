function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("P");
    console.log("R");
    console.log("I");
    console.log("Y");
    console.log("O");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
addTwoNumber(10, 8)
addTwoNumber(10, "8")
addTwoNumber(10, "a")
addTwoNumber(10, null)

const result = addTwoNumber(10, 8)

// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Supriyo"));
console.log(loginUserMessage()); // undefined just logged in


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

function loginUserMessage(username = "ram"){
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Supriyo"));
// console.log(loginUserMessage("supriyo"));

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(18, 45, 7, 17));

const user = {
    username: 'Supriyo',
    price: 1800
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject({
    username: "barbarian",
    price: 1200
})

const myNewArray = [18, 7, 45, 17]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([45, 18, 17, 7]));
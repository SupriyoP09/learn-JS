// console.log( 2 > 1);
// console.log( 2 >= 1);
// console.log( 2 < 1);
// console.log( 2 == 1);
// console.log( 2 != 1);



// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2" ===2); // false

// Primitive

// String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 118
const scoreValue = 118.7

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 11122222223444443n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["barbarian", "pekka", "samosaMan"];
let myObj = {
    name: "Ram",
    age: 18,
}

console.log(heros);


const myFunction = function(){
    console.log("Hello chat");
}

console.log(typeof anotherId);
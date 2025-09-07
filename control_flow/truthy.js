const userEmail = []
if (userEmail) {
    console.log("got user email");    
} else {
    console.log("don't have user email");
    
}

// falsey value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthly values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 20 ?? 10

console.log(val1);

// Terniary Operator

// condition ? true : false

const samosaPrice = 9
samosaPrice <= 8 ? console.log("less than 8") : console.log("more than 8");


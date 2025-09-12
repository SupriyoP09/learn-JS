// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`Each cahr is ${greet}`);
}

// Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United State of America")
map.set('Ge', "Germany")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}
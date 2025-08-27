// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    c = 30
    // console.log("INNER: ", a);
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Supriyo"

    function two(){
        const website = "youtude"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}
// one()

if (true) {
    const username = "Supriyo"
    if (username === "Supriyo") {
        const website = " youtude"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// Example------------------

console.log(addone(5))

function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}
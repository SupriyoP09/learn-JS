const user  = {
    username: "Supriyo",
    price: 18,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user .username = "Ram"
// user.welcomeMessage()

// console.log(this);

// function samosa(){
//     let username = "Supriyo"
//     console.log(this.username);
    
// }
// samosa()

// const samosa = function(){
//     let username = "Supriyo"
//     console.log(this.username);
    
// }

const samosa = () => {
    let username = "Supriyo"
    console.log(this);
    
}

// samosa()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2


// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ( {username: "Supriyo"} )

console.log(addTwo(10,8));
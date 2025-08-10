// singleton

// object literals
// Object.create

const mySym = Symbol("key1")

const JsUser = {
    name: "Supriyo",
    "full name": "Supriyo Pramanik",
    [mySym]: "mykey1",
    age: 18,
    location: "india",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", 'Saturday']
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "abc@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "abc@apple.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`hello Js user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
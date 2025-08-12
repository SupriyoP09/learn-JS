// const tinder = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ram"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Supriyo",
            lastname: "Pramanik"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
    {
        id: 1,
        email: "abcd@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    coursename: "Learn JS",
    price: "18",
    courseInstructor: "Virat"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// JSON API CALL LOOK LIKE example

// {
//     "name": "Virat",
//     "coursename": "learn Js",
//     "price": "free"
// }

// API IN ARRAY FORMAT

// [
//     {},
//     {},
//     {},
// ]
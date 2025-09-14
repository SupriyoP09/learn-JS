const coding = ["js", "cpp", "ts", "py"]

// coding.forEach( function (val) {
//     console.log(val);
    
// } )

// coding.forEach( (val) => {
//     console.log(val);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const myCoding = [
    {
        languageName: "typescript",
        languageFileName: "ts"
    },
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
} )
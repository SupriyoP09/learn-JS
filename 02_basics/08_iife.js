// Immediately Invoked Function Expression

// Global scope pollution often causes problems
// To avoid this we use an iife
// which keeps variables and declarations out of the global scope

(function samosa(){
    // nmaed iife
    console.log(`DB CONNECTED`);
})(); // most people forget to write semicolon when they are asked to write two iife in one file
    
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('Supriyo')
// Immediately Invoked Function Expressions (IIFE)
// it helps to avoid from global pollution


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
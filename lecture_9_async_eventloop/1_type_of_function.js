console.log("Hi Functions!"); 


// function -> function Statement
function fn(a) {
    console.log("i am a fn", a) 
    return 10 ; 
}

const rVal = fn("hello") ; 
console.log("rVal", rVal) ; 
const anotherVar = fn; 
console.log("anotherVal", anotherVar) ; 



// function expression

const refFunction = function() {
    console.log("Hello I am function") ; 
}

refFunction() ; 


// function -> arrow function 

const arrowFn = () => {
    console.log("Hello I am arrow Function") ; 
}

arrowFn() ; 

// IIFE -> Imediately invoked function expression 

(function(a){
    console.log("I am function IIFE",a) ;
})("hello")
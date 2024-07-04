console.log("hello js");


// // variable scope

let c = 10 ; 
console.log("console 1",c) ; 
function fn() {
    let c = 20;
    console.log("console 2", c); 
    c++ ; 
    console.log("console 3" , c) ; 
}

fn() ; 
console.log("console 4", c); 


// what is block -> anything between two curly braces
// * function , loop , conditionals
// let-> block scoped

let b =10 ; 
console.log(b) ; 

// now this is a block
if(true){
 let b = 20; 
 console.log(b) ; 
}

console.log(b) ; 

// exercise 
let a = 10;
console.log("console 1", a);
function fn() {
   let a = 20;
    console.log("console 2 ", a);
    a++;
    console.log("console 3", a);
    if (a) {
        let a = 30;
        a++;
        console.log("console 4 ", a);
    }
    console.log("console 5", a);
}
fn();
console.log("console 6", a);


// every let declared varaiable is dead -> temporal dead zone
// where you can't access it's value

//console.log("before", varName); 
let varName; 
console.log("after",varName); 
varName=10; 
console.log(varName); 
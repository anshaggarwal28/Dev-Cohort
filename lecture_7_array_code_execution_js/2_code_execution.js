// Code execution takes place in the stack ( RAM ) -> high level
let a = 10 ; 
console.log(a); 
function fn() {
    console.log("I am fn"); 
    function inner()
    {
        console.log("I am Inner") ; 
    } 
    console.log("i am function");
   
   
    inner() ; 

    console.log("i am function");
}

fn(); 
console.log(a) ;  


/**
 * JS-> 
 * 1.all the code is executed on the call stack 
 *       and inside a execution context
 * 2. An execution context is created when
 * a. when a function is called
 * b. code execution starts for the global code 
 *     -> global execution context
 * 3. Execution context -> it executes in two phases
 * a.) memory allocation -> hoisting
 *     i) variable->undefined
 *     ii) functions-> memory allocation in the heap
 *     * Window
 *     * This
 *     * Outer Scope
 * 
 * b.) code execution
 * 
 */


let b; 
console.log(b) ; 
b= 10 ; 
console.log(b) ; 

function fn1() {
    console.log("hello") ; 
}
fn1() ; 


// Small quiz , try to comprehend and understand running of this code

real() ; 
function real()
{
    console.log("I am real, Always run me");
}
function real()
{
    console.log("No I am real one");
}
function real()
{
    console.log("You both are wasted");
}

real(); 
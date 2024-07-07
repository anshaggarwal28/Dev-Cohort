/**
 *
 * The code will cause the browser or Node.js environment 
    to hang because of the while(a) loop, 
    which is an infinite loop as long as a remains true. T
    he setTimeout is supposed to execute the function fn after 1 second,
    changing a to false and breaking the loop, but the loop
    never allows the event loop to process the setTimeout callback. 
 *
 */

/**
 * browser
 *   console.log-> browser
 *   setTimeout-> browser
 *   document-> browser
 *    window -> browser
 * What is JS doing then ?
 * Rule of thumb : 
 * JS : logic
 * Environment : features 
 */

let a = true;
console.log("Before") ; 

function fn()
{
    a = false; 
    console.log("i broke the while loop") ; 
}

setTimeout(fn,1000); 
console.log("After") ; 

while(a)
{

}
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
/**
 * 
 * 
 * 
 * 
 * * */


// let a = true;
// console.log("Before") ; 

// function fn()
// {
//     a = false; 
//     console.log("i broke the while loop") ; 
// }

// setTimeout(fn,10000); 
// console.log("After") ; 

// while(a)
// {

// }

/**  
 * Mobile Application -> React Native -> JS
  * Frontend - > Browser -> JS
  * Backend -> Nodejs -> JS
  * Desktop -> Electron -> JS


*/

/**
 * 
 * c -> c++
 * c/c++ -> Java(there are no pointers, no memory allocation hassle)
 * Java -> Js (no multithreading)
 * 
 * 
 */


// Excercise 2

// let a = true ; 
// console.log("before") ; 
// function fn() {
//     a = false; 
//     console.log("I broke the while loop") ; 
// }

// setTimeout(fn,2000) ; 
// console.log("after") ; 

// let current6 = Date.now()+6000 ; 

// while(Date.now()<current6){

// }

//Exercise 3

console.log("Before");
function a()
{
 console.log("I am a") ; 
}

function b()
{
    console.log("I am b"); 
}

setTimeout(a,0);
console.log("After st 0 sec call"); 

setTimeout(a,1000); 
console.log("After st 1 sec call"); 

setTimeout(b,2000); 
console.log("After st 2 sec call"); 
console.log("after") ; 

/****
 * 1. Every line of code that you wrote in your js file -> will only execute in call stack  
 * 2. For a cb coming from WebAPIS to execute -> callstack should be empty
 * 3. callback queue :As soon as task of asynchronous function is done there cb is immediatley
 * enqueued in that queue
 * 4. event loop : checks the queue and as soon as a cb arrived in the queue it continously 
 * check if callstack is empty or not and pushed that cb in callStack .
 * **/

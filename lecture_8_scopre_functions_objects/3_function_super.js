/**
 * 0. function has two parts
 *      fn defintion
 *      fn invocation
 *
 * */

// fn defenition
function fn() {
    console.log("Hello");
}

// // // fn invocation -> code inside that fn is execute 
fn();


// variables -> assign ->reference , value
let arr0 = [10, 20, 30];
let arr02 = arr0; // reference
let a = 10;
let b = a;// value


// variables -> can be passed as a parameter to a function

function fn1(params) {
    console.log("Hello Params", params);
}
fn1(10);
fn1("Hello");
fn1(arr02);


/*****
 * You can treat a function as a variable
 * 
 * ***/

function fn() {
    console.log("Hello");
}

// // fn invocation -> code inside that fn is execute 
fn();

// access

console.log(fn);



let arr = [10, 20, 30];
let arr2 = arr;
console.log("arr",arr)
console.log("arr2",arr2)


// function expression
const refFunction = function () {
    console.log("Hello i am fuunction");
}

const newFNVar=refFunction;

newFNVar();
console.log("`````````````````");
refFunction();


// exercise
// const real1=function () {
//     console.log("I am real. Always run me");
// }

// const real1=function () {
//     console.log("No I am real one ");
// }

const real1=function () {
    console.log("You both are wasted");
}

real1();






let arrx = [10, 20, 30];
let arrx2 = arrx


function fn(params) {
    console.log("Hello Params", params);
}
fn(10);
fn("Hello");
fn(arrx2);
// functions can also be passed as variables in a function 

function bigger(paramFN) {
    console.log("Inside bigger")
    paramFN();
}

function smaller() {
    console.log("I am smaller");
}
bigger(smaller)
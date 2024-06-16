/**
 * variable declaration
 * simple how js runs the code
 * dynamically typed language
 */


console.log("Inside Intro");

// // variable declaration -> varName is a variable that currently holds undefined value
let varName; 
// // default value of variable is undefined

console.log("7",varName);
varName=10; 
console.log("9",varName);
varName=10.1; 
console.log("11",varName); 


// //strings in  js we only have strings
let newVar; 

newVar= "I am a String"; 
console.log("18",newVar); 

// //boolean

newVar= true; 
console.log("23",newVar)

// //null, undefined means no value exist in this variable. 
newVar = null ; 
console.log(newVar); 

/**
 * how to know the current type of value that a  variable holds. 
 * 1. there is no type of variable
 * there only numbers - no float int double
 * there only strings - no characters 
 * 
 * what types of values it can have:
 *  *Primitive -> number, strings, booleans, null, undefined
 *             -> bigInt, symbols
 * 
 *  * Non-primitive -> 
 *                 -> functions , arrays and objects
 */



varName= 10; // number
varName="hello"; // string
varName= false; // boolean
varName=10.1;// number
varName= 'hello'; //string
console.log(typeof varName); 

/** q1
 * undefined
 * 7.5
 * 3
 * 6
 * 2
 * null
 * null
 */

let e= undefined ; 
e = e+5;
console.log(e); 



// conditionals

let number= 10; 
if(number%2==0){
    console.log("I am even"); 
}
else{
    console.log("I am odd"); 
}


// if there are lot of if elses -> then go with switch case


// let days="mon"; 
// if(days=="mon")
// {
//     console.log("working"); 
// }
// else if( days=="tue")
// {
//     console.log("today is off"); 
// }
// else
// {
//     console.log("weekend"); 
// }

let day = "sunday"
// switch conditional

switch(day) {
    case "mon":
        console.log("working"); 
        break; 
    case "tuesday":
        console.log("working"); 
        break;
    case "monday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("working");
        break;
    case "saturday":
    case "sunday":
        console.log("weekend");
        break;     


    default:
        console.log("invalid day");     
}




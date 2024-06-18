console.log("hi");

/**
 * Arrays
 * they dont hve a strict size -> you can add remove elements from it. 
 * 
 */

let arr=[1,2,3,4];
let arr2 = []; 

//print
console.log("arr",arr); 
console.log("arr2",arr2); 

// iterate

for(let i=0 ; i< arr.length; i++)
{
    console.log("index",i,"value: ", arr[i]); 
}

/***Important methods******** */
/**
 * 1. add last ->  push
 * 2. remove last -> pop
 * 3. add first -> unshift
 * 4. remove first -> shift
 * 5. slice
 * 6. splice
 * 
 * 
 * 
 *  to note array is dynamic in javascript  
 */


// 1. push()- add element at the end of array. 
arr.push(50); 
console.log(arr);

// 2. pop() - remove the element at the end of array 
arr.pop() ; 
console.log(arr); 

//3. unshift()- add element at the start of array 

arr.unshift(5) ; 
console.log(arr); 

//4. shift() - remove the element at the start of array. 
arr.shift(); 
console.log(arr); 

//5. slice - copies a slice from the original array from start index to (end index - 1) 
// input start index to end index 

let slicedArr = arr.slice(1,3); 
console.log(slicedArr) ; 

//6.splice lets seee


arr.unshift(0); 
arr.push(5) ; 
console.log(arr); 
// arr.splice(a,b) where a->starting index , b-> no. of elements to be removed 
arr.splice(3,2);
console.log(arr);


//7. indexOf - find the index of element in the array. 

console.log("index of 5:", arr.indexOf(5)); 
console.log("index of 30:", arr.indexOf(30)); 

//8. includes - is element present ????

console.log("is element present", arr.includes(10)); 


//9. join - join the array elemennts with the specified seperator
let fruits=["apple","oranges","banana"]; 
let str = fruits.join("+"); 
console.log("string:",str); 




//Q1 - given on jasbir sir file github

let array= ["apple","banana","cherry","date"]; 
let result = advancedManipulation(array); 
console.log(result); 

function advancedManipulation(words) {

    let x = words.shift(); 
    words.unshift("new"); 
    words.unshift(x); 
    words.splice(2,1); 
    let st = words.join(","); 
    return st;


}

console.log("stack and heap"); 

// value types -> ram(stack)
// because we have idea of size they can be accessed very fast
let a = 10; 
let str = "ashfdwhfnlfmwlrejfowhfo"; 
let flag = true ; 

// we have an estimate how large the size they will occupy in the memory or what size they are of maximum
// they are stored in ram


// refrence type -> no idea of size.
// thus stored in hard disk(heap)

//arrays
//functions

let arr = [1,2,3] ; 

function fn()
{
    console.log("i am fn") ; 
}

// value change

let b = 10 ; 
b = 20 ; 

let st = "hello" ; 
st = "hi" ; 
console.log(b,st) ; 

let arr1= [10,20,30] ; 
let arr2= [30,40,50]; 
arr=arr2;
console.log(arr) ; 

 const varName= 20; 
// varName=100;   
// // cant change value of const in stack. 

 const str1= "hello"; 
// str1 = "hi" ; 


const arr3 =[10,20,30] ;
arr3.push(100) ; 
console.log("arr3",arr); 
// we can manipulate the array in heap using const but cant change the array to another
// we always use const ( default)




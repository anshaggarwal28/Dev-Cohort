console.log("hello DOM :)");
// read the content of p tag
// 1. select 

// html inside the second child
console.log(document.children)
const html=document.children[0];
const body=html.children[1];
console.log("innerHTML", body.innerHTML);


//  * 
//  *  querySelector -> selector -> first matching 
//  * element return


 const body1 = document.querySelector("body");
 console.log(body.innerHTML);


// first ptag
const pTag = document.querySelector("p");
console.log("content inside p:", pTag.textContent);

// second p tag 
const ptagArr = document.querySelectorAll("p");
const textData = ptagArr[1].innerText;
console.log("2nd p tag ", textData);

// class
const clasPtag=document.querySelector(".first");
console.log("first",clasPtag.textContent);
// id
const idPtTag = document.querySelector("#unique");
// read 
console.log("second",idPtTag.textContent);
console.log("second",idPtTag.innerText);
// console.log("=====================")

const body2 = document.querySelector("body");
console.log(body2.innerHTML);
console.log("==========================")
console.log("innnerText ->",body2.innerText);
console.log("text content->",body2.textContent);


// update  -> property
idPtTag.textContent = "I was update  by js"

// // styling -> 
idPtTag.style.backgroundColor = "blue";
idPtTag.style.color = "white";

const idValue = idPtTag.getAttribute("id");
console.log("idValue",idValue)

// delete 
// idPtTag.remove();

//creation

const liElem=document.createElement("li");
// add text , styling or properties
liElem.innerText="I am a task";
liElem.style.backgroundColor = "yellow" ; 
liElem.style.color= "brown";

// select there parent
const ulArr=document.querySelectorAll(".list");

// // append to that 
ulArr[1].appendChild(liElem);






















// non primitive-> functions , arrays , objects 

let obj = {}
// key add
obj.name="Jasbir"; 
obj.age=28; 
//update
obj.age = 25; 
//print
console.log(obj) ; 



//object : key : value
//-> key : string , number
//-> value : any valid js type

let cap = {
    firstName:"Steve",
    lastName:"Rogers",
    movies:["FirstAvenger","Winter Soldier","CivilWar"],
    address:{
        state:"NewYork",
        district:"Manhattan"
    },
    isAvenger: true, 
    age: 35,
    sayHi: function() {
        console.log("cap say's hi");
    }
}


// print 

console.log("cap",cap) ; 
// get 

console.log("firstName", cap.firstName) ; 
console.log("secondmovie", cap.movies[1]) ;
console.log("capstate", cap.address.state) ; 
cap.sayHi() ; 

// update set 

cap.isAvenger=false;
cap.friends=["tony","peter","bruce"]; 
console.log("++++++++++++++++-++++++++++++++++++++"); 


// delete 

delete cap.movies; 

console.log(cap) ; 

// loop 

for(let key in cap) {
    console.log("key", key , "value" , cap[key] );
}
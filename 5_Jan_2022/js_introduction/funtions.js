//Normal Functions

function sayMyName(){
    console.log("My name is Sheila, Sheila kee jawani")
}

sayMyName() //function calling or invokation

//parameters in function

function add( a, b){
console.log("pawn","star")
}

add(2,3) //Providing arguments in the function

//functions are treated as first class citizens in JavaScript, which means we can declare functions as variables

let sayNew = function(){ //anonymous function
    console.log("Fuck Mrinal")
}

sayNew()


VipulKeeShaadi()

function VipulKeeShaadi(){
    console.log("Nahi hogee")
}


//tp() this will create a problem because of later declaration
let tp = function(){
    console.log("Roz hee hota hai")
}

tp() // No error


//IIFE (Immediately invoked function Expression)
let substract =  (function(a,b){  //We dont need to invoke them, they invoke on it's own, 
    console.log(a-b)
}) (38,29)

//returning value

function sayNewVal(){
    return 'Say hello'
}

let ans = sayNewVal()

console.log(ans)

//multiple functions with same name but based on var because using let is not defined

var multiplyIEFY = (function(a,b){
    console.log(a*b)
})(30,60)


var multiplyIEFY = (function(a,b){
    console.log(a*b)
})(23,22)
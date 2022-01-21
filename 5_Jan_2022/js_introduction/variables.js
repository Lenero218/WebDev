//variable declaration

//JavaScript is a dynamically typed language

//JavaScript is a single threaded language: which means it runs line by line

//var,let,const  No need to specify type

//Variables

//Number String boolean Null Undefined ~ Types of Data Types



var a; //This will always be initialised with undefined value
console.log(a);

a=3;
console.log(a);

a = 'I am a new bie';
console.log(a)

a =true
console.log(a)

//var b  =2
var n = 2.3
var f = 2.45234

// console.log(b)
console.log(n)
console.log(f)

//String
var s1 = "a"
var S2 = "I am aa new String"
console.log(s1)
console.log(S2)

//Boolean
var t = true
var f = false
console.log(t)
console.log(f)

//undefined

var u = undefined
var n = null
console.log(u)
console.log(n)

//First problem with var - Redeclaration, Redeclaration will be nullified using Let keyword

// let b = 'hello'
// console.log(b)

//let b = 'bye' //Error- B already been declared
//console.log(b)


//loops
    //Check if number is prime

    var n=17
    var flag = true

    for(var i = 2; i*i<=n; i++){
        if(n%i==0){
            flag = false;
            break;
        }
    }

    if(flag==true)
    {
        console.log('Number is prime')
    }
    
    else{
        console.log('Number is not prime')
    }

    //SCOPING - Second problem with var

    //var is function scoped

    // if(10%2==0){  Error 
    //     var d = "This is modulus check"
    //     console.log(d)

    // }
    // console.log(d)

    if(10%2==0){
        let e = "e"
        console.log('This is outer code',e)
    }
   // console.log(e) //e is not defined because let is block scoped

//**Difference between let and Var........ Scoping and Redeclaration.........**


//const
const f = "this is new"
// f="Bowo" This will create error, as we previouly have defined f as const
console.log(f)



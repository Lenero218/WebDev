//Javascript objects are always in key-value pair

// to declare an object

let obj = {} //Declaration

let person = {
    //key : Value
    name : 'Amit',
    age : 21,
    contact : 9971741280,
    sex : 'male',
    height : '6 2' 

}


let car = {
    name : 'Bugati Chiron',
    Brand : 'Bugati',
    maxspeed : "400 km/h",
    color : "black",
    cost : '$500000',
    
}
//We can store array inside the key of the object
let CA = {
    1 : 'Steve',
    
    lastName : 'Rodgers',
    
    friends : ['Bucky','Tony','Banner'],
    
    age : 102,
    
    isAvenger : true,
    
    address : { //Nested Objects
        state : 'Manhattan',
        city : 'New York'
    },

    sayHi : function(){
        console.log("Say hi to Captain America")
    }
}


//How to access objects-dot notation
console.log(CA.firstName)
console.log(CA.sayHi())
console.log(CA) //Will print the whole object

//Bracket - Notation

console.log(CA['isAvenger'])
console.log(CA.address.state)
console.log('Captain America best friend is : '+ CA.friends[1])
console.log('Name is : '+CA[1]) // To use the key specified value
CA.sayHi()


//for in loop - for objects

for(let key in CA){ //This will access each key in the object

    //for in loop automatically convert the key to string so there is no need to write CA['key']

    console.log('key', key, 'value: ',CA[key] )


}


//Methods to update the object
CA.isAvenger = false //Changing the value
console.log(CA.isAvenger)

CA.movies = ['Age of Ultron', ' Civil War', 'First Avenger'] //Adding new property
console.log(CA.movies)

delete(CA.age) //For deleting the value
console.log(CA)

CA.friends[1] = 'Bruce Almighty'
console.log(CA.friends)






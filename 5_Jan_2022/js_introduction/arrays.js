//Arrays - Array provide you an ordered collection of Elements(Need not be of same type)
//Arrays are dynamic in javascript
let arr = [] //initialisation of array
let cars = ['GTR','BMW','Merce',1,2,3,5]

console.log(cars)
cars[0]="Mustang" 
console.log(cars[2])
console.log(cars)

//Add Method
cars[7] = "New ele"
cars[15]= "elleeee"

console.log("Array after Popped Element : "+cars)

//pop method
let check1 = cars.pop()
console.log("Popped Element : "+check1)
console.log(cars)


//push method
cars.push("Pushed Element")

console.log("Array After Pushed element : " + cars)

//shift and Unshift in array

//shift - remove the eleement from the first from the array

let shifted = cars.shift()
console.log(shifted)

//unshift - this will add the element at the first index of the element
console.log(cars)
cars.unshift("Aston Martin")
console.log("After the addition of the first element due to unshift : " + cars)

//Finding the length of the array
console.log("The length of the array is : " + cars.length)


// 2-D array

let matrix = [
    [23,22,21],
    [22,21,23],
    [43,44,45],
    [12,13,14]
]

console.log(matrix[0][1])

console.log(matrix[1][2])
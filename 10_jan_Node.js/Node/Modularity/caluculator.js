function add(a,b){
    console.log("The sum is", a+b)
}
function sub(a,b){
    console.log("The difference is: ", a-b)
}
function multiply(a,b){
    console.log("The multiplication is: ", a*b);
}
function division(a,b){
    console.log("The division is: ", a/b)
}

module.exports = {
        Addition : add,
        Substraction : sub,
        Multiplication : multiply,
        Division : division
}
//Child process is a module which is used to create subprocesses inside the script

//This makes connection with the outer system and open any specific application

const cp = require('child_process') //Requiring the module

console.log('Trying to open calcular')

//cp.execSync('calc') //This will open a calcular using the cmd command

//console.log('Trying to open VS Code')
//cp.execSync('code')
//console.log('VS CODE opened')

let output = cp.execSync('node test.js') //Provide the name of the file
console.log('Output is'+ output)

console.log("Starting chrome")
cp.execSync('start chrome')



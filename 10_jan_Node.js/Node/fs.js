const fs = require('fs') //Requiring fs module for file system
const path = require('path')
//Aim : Reading, Writing, Updating and deleting

//Reading - This method is used to reading a file
// let content = fs.readFileSync('f1.txt')
// console.log(content.toString())


// //Writing - This method is used to write in a file
// fs.writeFileSync('f1.txt','This is the new added text')
// console.log(fs.readFileSync('f1.txt').toString())
// fs.writeFileSync('f3.txt','f3 written data')
// console.log(fs.readFileSync('f3.txt').toString())

// //Updating - This method is used to update a file
// console.log(fs.appendFileSync('f3.txt','This is new appended data'))
// console.log(fs.readFileSync('f3.txt').toString())

//Deleting - This method is used to delete a file
//fs.unlinkSync('f4.txt')


// HANDLING Directory
//fs.mkdirSync('myDirectory') creation
//fs.rmdirSync('myDirectory') deletion

// let doesExist = fs.existsSync('f1.txt')
// console.log('doesExist')

// console.log(fs.existsSync('myDirectory')) //To check if a directory exist

// //lstatSync- It tells the status of the file
// let stats = fs.lstatSync('f1.txt')
// console.log('Making directory')
// fs.mkdirSync('newDirectory')

// console.log('is File?',stats.isFile())
// console.log('is Directory?', stats.isDirectory())

//Not working
// let folderPath = "D:\\Web Dev\\10_jan_Node.js\\Node\\myDirectory\\childDirectory"
// let folderContent = fs.readdirSync(folderPath)
// console.log('folder content'+folderContent)

//Cpying from src to dest
let sourcePath = "D:\\Web Dev\\10_jan_Node.js\\Node\\myDirectory\\f5.txt"
let destinationFolderPath = "D:\\Web Dev\\10_jan_Node.js\\Node\\myDirectory2"

let tobeCopiedFileName = path.basename(sourcePath) //f1.txt
let destPath = path.join(destinationFolderPath,tobeCopiedFileName)
fs.copyFileSync(sourcePath,destPath)
console.log('File Copied')


const path = require('path')

let filepath = 'D:\\Web Dev\\10_jan_Node.js\\Node\\1.txt'

let extensionName = path.extname(filepath) //will provide the extension from the path of the file provided
console.log(extensionName)

let baseName = path.basename(  extensionName ) //This will provide the name of the file
console.log(baseName)

console.log(__dirname) //Provide the path name
console.log(__filename) //Provide the file name


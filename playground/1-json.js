const fs = require('fs')

// const book = {
//     title: 'A tale of two cities',
//     author: 'Charles dickens'
// }

// const bookJSON = JSON.stringify(book)   //converts objects in form of strings which can further be stored in files
// console.log(bookJSON)
// fs.writeFileSync('1-json.json',bookJSON)

// const parsedData = JSON.parse(bookJSON) // used to convert json string to object format 
// console.log(parsedData.author)


// const dataBuffer = fs.readFileSync('1-json.json') // This will give data in form of bits and bytes that is why dataBuffer
// // console.log(dataBuffer) 
// console.log(dataBuffer.toString()) // toString() will convert bytes format to string format 

// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)

//read the read json file 1-js.json and convert to the object type 
const dataJSON = fs.readFileSync('1-js.json').toString()
const data = JSON.parse(dataJSON)
data.name = 'Arshit Mittal'
data.age = '22'

// store the new values in the file in the form of string 
const newData = JSON.stringify(data)
console.log(newData)
fs.writeFileSync('1-js.json',newData)


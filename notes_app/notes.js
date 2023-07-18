const { default: chalk } = require('chalk')
const fs = require('fs')

const getNotes =  () => {
    console.log(chalk.blue.inverse.bold("Your notes ..."))
    const notes = loadNotes()
    notes.forEach(note => console.log(note.title)) 
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // filter to check whether the title already exists or not 
    //  const duplicateNotes = notes.filter(function(note){
    //     return note.title === title
    //  })
    // const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
     if(!duplicateNote){
        notes.push({
            title: title,
            body: body 
        })
        saveNotes(notes)
        console.log(chalk.green('New note added'))
     }else{
        console.log(chalk.red('Oops!!! Title already taken'))
     }
    
     
    // console.log(notes)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
//     const dataBuffer = fs.readFileSync('notes.json')
//     const data = dataBuffer.toString();
//     return JSON.parse(data); // Since the above three lines may throw an error if there is no such file , so we will rather use try catch approach here 
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const data = dataBuffer.toString();
        return JSON.parse(data);
    }catch(e){
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    // const duplicate = notes.filter(function(note){
    //     return note.title !== title
    // })
    const duplicate = notes.filter((note) => note.title !== title)
        if(duplicate.length == notes.length){
            console.log(chalk.red.italic("No title found"))
        }else {
            saveNotes(duplicate)
            console.log(chalk.blue.italic(title+" deleted"))
        }
}

const listNotes = () => {
   getNotes();
}

const readNotes = (title) => {
    const notes = loadNotes()
    const findNote= notes.find((note) => note.title === title )
    if(findNote){
        console.log(chalk.greenBright.italic(findNote.body))
    }else{
        console.log('Note not found')
    }

}

module.exports = {
    getNotes : getNotes ,
    addNote : addNote ,
    removeNote : removeNote,
    listNotes : listNotes,
    readNotes: readNotes
}
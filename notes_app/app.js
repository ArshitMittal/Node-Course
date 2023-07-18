// const validator = require('validator')

const chalk = require('chalk')
const note = require('./notes.js')
const yargs = require('yargs')

// const myNotes = note();
// console.log(myNotes);

// // console.log(validator.isEmail('arshitmittal123@gmail.com'))
// // console.log(validator.isEmail('1234t3523@xyz'))

// // console.log(validator.isURL('arsagag'))

// console.log(chalk.green('Success'))
// console.log(chalk.green.bold('Success!'))
// console.log(chalk.red.bold.inverse('Error!!!'))

// // console.log(process.argv)
// console.log(process.argv[2])

// const add = require('./util.js')

// const name = "Arshit "

// const sum=add(4,5)

//  console.log(sum)
 
// const x=process.argv
// const command = x[2]

// if(command === 'add'){
//     console.log(chalk.blue('Adding new Notes'))
// }else if (command === 'remove'){
//     console.log(chalk.yellow('Removing notes'))
// }

yargs.version('1.1.0')

//Create add command 
yargs.command({
    command: 'Add',
    describe: 'Adding a new note',
    builder: {        //we create properties here for our commands
        title: {
            describe: 'Note Title',
            demandOption: true , // Force to use title in comman in order to work 
            type: 'string' // so that title type is always in string form 
        },
        body: {
            describe: 'Body of a note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log("Working.... ")
        note.addNote(argv.title, argv.body)
    } 
})

//create remove command 
yargs.command({
    command:'remove',
    describe:'Removing a new note',
    builder: {
        title:{
            describe: 'Note to be removed ',
            demandOption: true,
            type: 'string' 
        }
    },
    handler: (argv) => {
        note.removeNote(argv.title)
    }
})

//create a list command 
yargs.command({
    command: 'list',
    describe: 'Listing all addded notes in the console',
    handler: () => {
        note.listNotes()
    }
})

//create a read command 
yargs.command({
    command:'read',
    describe:'Read a note ',
    builder: {
        title :{describe: 'Note title',
        demandOption: true,
        type: 'string'}     
    },
    handler:  (argv) => {
        note.readNotes(argv.title)
    }
})

yargs.parse() // parse the commands without using yargs.argv in console to parse the command
//  console.log(process.argv)
// console.log(yargs.argv)
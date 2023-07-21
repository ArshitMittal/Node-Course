const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
// console.log("11")
const User = mongoose.model('User',{
    name: {
        type: String,
        required:true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must a positive number')
            }
        }
    },
    email:{
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 7,
        validate(str)
        {
            if(str.toLowerCase().includes('password'))
            throw new Error('Password cannot be set \"password\"')
        }
    }
})
//  console.log(1212)

// const me = new User({
//     name :'Arshit',
//     age:22
// })

// // console.log("34241")
// me.save().then(() =>{
//     console.log(me)
// }).catch((error) =>{
//     console.log('Error!',error)
// })

// const me2 = new User({
//     name :'Arshit',
//     age:'twenty two'
// })

// // console.log("34241")
// me2.save().then(() =>{
//     console.log(me2)
// }).catch((error) =>{
//     console.log('Error!',error)
// })

const task = mongoose.model('Task',{
    description:{
        type : String,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    }
})

// const newTask = new task({
//     description: 'Mongooose library ',
//     completed: false
// })

// newTask.save().then(() => {
//     console.log(newTask)
// }).catch((error) => {
//     console.log(error)
// })

// const me = new User({
//         name : 'Rohit4',
//         email: 'rohit@ab'
//     })
    
//     // console.log("34241")
//     me.save().then(() =>{
//         console.log(me)
//     }).catch((error) =>{
//         console.log('Error!',error)
//     })

    // const me2 = new User({
    //     name : '    Rakesh2312  ',
    //     email: '  RAKESH12321@ABC.COM    ',
    //     age : 50,
    //     password : 'phone091441!'
    // })
    
    // console.log("34241")
    // me2.save().then(() =>{
    //     console.log(me2)
    // }).catch((error) =>{
    //     console.log('Error!',error)
    // })

    const newTask = new task({
            description: '    Mongooose library 2    ',
        })

        newTask.save().then(() =>{
            console.log(newTask)
        }).catch((error) => {
            console.log(error)
        })
//crud operations

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const objectID = mongodb.objectID

const { MongoClient , ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.1'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.id.length) 
console.log(id.getTimestamp())
console.log(id.toHexString().length)
MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client) => {
    if(error)
    {
      return  console.log('Unable to connect to the database')
    }
console.log('connected ...')

const db= client.db(databaseName)

// db.collection('users').insertOne({
//     name:"Lavish",
//     age:27
// },(error,result) => {
//     if(error)
//     {
//         return console.log('Unable to insert the new user ')
//     }
//     console.log(result.insertedId)
// })

// db.collection('users').insertOne({
//         _id : id,
//         name:"Lavish",
//         age:27
//     },(error,result) => {
//         if(error)
//         {
//             return console.log('Unable to insert the new user ')
//         }
//         console.log(result.insertedId)
//     })

    //  db.collection('users').insertMany([
    //     {
    //         name : 'Arshit',
    //         age :22
    //     },
    //     {
    //         name: 'Aayush',
    //         age: 22
    //     }
    // ],(error,result) => {
    //     if(error)
    //     return console.log('Unable to enter multiple entries')
    //     console.log(result.insertedIds)
    // })
    //  db.collection('new tasks').insertMany([
    //     {
    //         description: 'Task1',
    //         completed: true
    //     },
    //     {
    //         description: 'Task2',
    //         completed: false
    //     },
    //     {
    //         description: 'Task3',
    //         completed: true
    //     }
    //  ],(error,result) => {
    //     if(error)
    //     return console.log('Unable to new data')
    //     console.log(result.insertedIds)
    //  })
    // db.collection('users').findOne({ _id : '64b8e8f68195a26e5fd47155' } ,(error, user) =>{
    //     if(error)
    //     return console.log('Unable to fetch')
    //     console.log(user)
    // }) //This code will not work because id in the form of hex data
   
    // db.collection('users').findOne({ _id : new ObjectId('64b8e8f68195a26e5fd47155') } ,(error, user) =>{
    //         if(error)
    //         return console.log('Unable to fetch')
    //         console.log(user)
    //     })
    // db.collection('users').find({age:22}).toArray((error,count)=>{
    //     console.log(count)
    // })

   // db.collection('new tasks').findOne( {_id : new ObjectId('64b8ea75c73fddbc792276cd')},(error,user) =>{
     //   console.log(user)
   // })
//     db.collection('new tasks').find({completed: false}).toArray((error,tasks) =>{
//         console.log(tasks)
//     })
//    const updatePromise =  db.collection('users').updateOne({
//         _id: new ObjectId('64b8e3653b876653d9ceb1ef')
//      },{
//         $set:{
//             name : 'Mahavir'
//         }
//      })

//      updatePromise.then((result) =>{
//         console.log(result)
//      }).catch((error) =>{
//         console.log(error)
//      })
db.collection('new tasks').find({completed: false}).toArray((error,tasks) =>{
    console.log(tasks)
})
 db.collection('users').updateOne({
    _id: new ObjectId('64b8e3653b876653d9ceb1ef')
 },{
    $set:{
        name : 'Mohim'
    }
 }).then((result) =>{
    console.log(result)
 }).catch((error) =>{
    console.log(error)
 })
//  db.collection('users').updateOne({
//     _id: new ObjectId('64b8e3653b876653d9ceb1ef')
//  },{
//     $inc:{
//         age :1
//     }
//  }).then((result) =>{
//     console.log(result)
//  }).catch((error) =>{
//     console.log(error)
//  })
 db.collection('new tasks').updateMany({
    completed:false
 },{
    $set:{
        completed:true
    }
 }).then((result)=> {
    console.log(result)
 }).catch((error)=>{
    console.log(error)
 })
    db.collection('users').deleteMany({
        age:27
    }).then((result) =>{
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })
    db.collection('new tasks').deleteOne({
        description : 'Task2'
    }).then((result) =>{
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })
 })


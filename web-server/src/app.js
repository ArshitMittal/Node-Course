const express = require('express')
const path = require('path')
const hbs=require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
//console.log(__dirname)
//console.log(path.join(__dirname,'../public'))

//Define paths for Express config
const publicDirectory = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')
// console.log("Arshit : " +publicDirectory)

//setup handlebars engine and views location 
app.set('view engine','hbs') // hbs will by default look for 
// views folder but we are using templates here so we have to set the path 
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve 
app.use(express.static(publicDirectory))

app.get('',(req,res) =>{
    res.render('index',{
        title: 'Weather app',
        name : 'Arshit Mittal'
    })
})

// app.get('',(req,res) => { 
//     res.send('<h1>Content</h1>')
// })

app.get('/help', (req,res) =>{
    res.render('help',{
        helptext : 'Arshit',
        title:'help',
        name:'Arshit Mittal'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title : 'Stewie Griffin' ,
        name: 'Arshit Mittal'
    }) 
})

app.get('/weather',(req,res) => {
    if(!req.query.address)
    {
        return res.send({
            error:"Enter place for weather information"
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } ={}) => {
        if (error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })

    })

    // res.send({
    //     location: 'Gurugram',
    //     forecast:'Sunny',
    //     address :req.query.address
    // })

app.get('/products',(req,res) =>{
    if(!req.query.search)
    {
      return  res.send({
            error:'You must provide a search query'
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})

app.get('/help/*',(req,res) =>{
    res.render('404',{
        title:'Help',
        name:'Arshit Mittal',
        errorMessage:'Help page not found'
    })
})

app.get('*',(req,res) =>{
    res.render('404',{
        errorMessage: '404 Error... Page not found',
        title: '404',
        name:'Arshit Mittal'
    })
}) // it should be put at end of all the routes 

app.listen(3000, () => {
    console.log('Server is up for the browser ')
})

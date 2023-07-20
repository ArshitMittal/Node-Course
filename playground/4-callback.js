 setTimeout(() =>{
    console.log("Two seconds are up")
 },2000)

 const names = ['Arshit','Aayush','Andrew']
const shortNames = names.filter((name) => name.length <=4 ) 

const geoCode = (address,callback) => {
   setTimeout(() =>{
    const data = {
        latitude :0,
        longitude : 0
    }
    callback(data)
   },2000)
}

 geoCode('Philadelphia',(data) =>{
    console.log(data)
 })
//console.log(data)
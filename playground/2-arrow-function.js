// // const square = function(x){
// //     return x*x;
// // }

// // const square = (x) => {
// //     return x*x;
// // }

// const square = (x) => x*x;

// console.log(square(5))

const event ={
    name: 'Birthday party',
    guestList: ['Arshit','Aayush','Andrew'],
    printGuest : function () {
        console.log('Printing list for '+ this.name)
        // this.guestList.forEach(function (guest) {
        //     console.log(guest + " is attending "+ this.name)
        // })  This function will bind to its own THIS so we use arrow function to bind to the parent function this
        this.guestList.forEach((guest)=>{
            console.log(guest + " is attending "+ this.name)
        })
    },
    newPrint (){
        console.log("Hello")
    }
}

// const event ={
//     name: 'Birthday party',
//     printGuest : () =>{
//         console.log('Printing list for '+ this.name)  ARROW FUNCTIONS CANNOT ACCESS 'THIS' SO WE HAVE TO USE CONVETIONAL FUNCTION ONLY
//     }
// }


event.printGuest();
event.newPrint();

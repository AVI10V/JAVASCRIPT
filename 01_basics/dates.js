let date= new Date()
// console.log(date.toISOString())
// console.log(date.toLocaleTimeString())
// console.log(typeof date) //object
// let mydate=new Date(2023,0,23,5,3);
// console.log(mydate.toLocaleString())
let mydate=new Date("2023-10-31")
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())

//timestamp

let myts= Date.now()
console.log(myts)
console.log(mydate.getTime())
console.log(Math.floor((Date.now()/1000)))
let newdate =new Date()
newdate.toLocaleString('default',{
    weekday:"long",

})

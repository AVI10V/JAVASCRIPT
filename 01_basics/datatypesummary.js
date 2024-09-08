//primitives 7 call by value actual null undefined numbers string bigint symbol boolean
//m=nono prim call by ref arrays objects and function
const id =Symbol('123')
const anotherid=Symbol('123')
if(id===anotherid){
    console.log(true)
}
else{
    console.log(false)
}
const hero=["avi","tanihsq"] //array
const cars=[]
cars[1]="brezza"
cars[0]="honda city"
console.log(cars)

//object


let myobj={
    name:"avi",
    age: 23,
}
console.log(myobj.age)

//funtion
const myfun=function(){
    console.log("inside")
}
console.log(myfun)
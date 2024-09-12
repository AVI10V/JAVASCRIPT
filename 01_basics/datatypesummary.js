//primitives 7 call by value actual null undefined numbers string bigint symbol boolean
//m=nono prim call by ref arrays objects and function
const id =Symbol('123')
const anotherid=Symbol('123')//symbol is used for unique 
if(id===anotherid){
    console.log(true)
}
else{
    console.log(false)
}
const hero=["avi","tanihsq"] //array
const cars=[] //new array without defininf its size
cars[0]="brezza"
cars[1]="honda city"
cars.push("i20")
// cars.pop() used to delete the last element
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

//memory type in js stack and heap
//primitives in stack  and n on prim in head(reference)

let myname="avi"
let anothername=myname
anothername="verma"
console.log(myname)
console.log(anothername)
let objone={
    name:"avi",
    age:20

}
let obj2=objone
//obj2 goes in stack but its reference points in the heap having objone so any changes made iin 2 makes in one as well
obj2.age=69
console.log(objone.age) //age of 1 changed as well



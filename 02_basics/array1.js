//ARRAY
const myarray=[1,2,3,4] //object of multiple types is js are resizeable
// console.log(myarray[3]);
// const her=["avi","hero"]
// const myarr= new Array(1,2,3,4)
myarray.push(9)
// console.log(myarray)

 //shift unshift 
//unshift adds the given number at 1st position and shifts the array by one
//shift deletes the first element

myarray.unshift("sex")
 console.log(myarray)
myarray.shift()
console.log(myarray)



// slice vs splice

//slice just slices from initial index to last exclusive
//splice slices but inclusive of last and ********** and also makes changes to orignal array removes those elements spliced 
console.log(myarray.slice(1,3))
console.log(myarray)

console.log(myarray.splice(1,3))
console.log(myarray)
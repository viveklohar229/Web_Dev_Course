console.log("Hey this is a tutorial 37")

var a = 5

// {
//     var a = 66
//     console.log(a)
// }

// console.log(a)  // In the case of var its return 66(local variable value) but in case of let not allowed

let a1 = 6

{
    let a1 = 65
    console.log(a1)
}
console.log(a1)  // Its return global variable value

// a = a + 1  // Allowed
var b = 6
var c = "Harry"


var _a = "Shubham"  // variable valid ---> Allowed
// var 55a = "Avni"  // variable not valid --> Not Allowed

// console.log(a + b + 8)
// console.log(typeof a, typeof b, typeof c)

// const a1 = 5
// a1 = a1 + 1    // Assignment to constant variable. Error throw

let x = "Vivek bhai"
let y = 22
let z = 33.5
const p = true
let q = undefined
let r = null

console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

let o = {
    "name": "vivek",
    "job code": 5600,
    "is handsome": true
}
console.log(o)
o.salary = "100Crore"
console.log(o)
o.salary = "500Crore"
console.log(o)
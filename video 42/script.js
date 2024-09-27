let arr = [1, 2, 4, 5, 7]
// Index   0, 1, 2, 3, 4

arr[0] = 566; // Array are mutable we can change the number but in string we can't change 

// let a = "vivek";
// a[0] = "k"
// console.log(a[0])
console.log(arr);
console.log( typeof arr);
console.log(arr.length)

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

// Array Methods
console.log(arr.toString())
console.log(arr.join("and"))
console.log(arr.pop())
console.log(arr)
console.log(arr.push("vivek"))
console.log(arr)
console.log(arr.unshift("jack"))
console.log(arr)
console.log(delete arr[6])

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]

console.log(a1.concat(a2,a3))

let a = [7,9,8]
console.log(a.sort())

let chandan = [1,2,3,,4,5]
console.log(chandan.splice(1,5))
console.log(chandan)
console.log(chandan.splice(1,5,222,333,"chandan"))
console.log(chandan)

let b  = [1, 93, 5, 6, 88]
// for (let index = 0; index < b.length; index++) {
//     const element = b[index];
//     console.log(element)
    
// }

// b.forEach((value, index, arr)=>{
//     console.log(value, index, arr)
// })

// let object = {
// a:1,
// b:2,
// c:3
// }

// for (const key in object){
//     if(Object.hasOwnProperty.call(object, key)){
//         const element = object[key];
//         console.log(element)
//     }
// }

// for(const iterator of  b){
//     console.log(iterator)
// }

for (const value of b){
    console.log(value)
}
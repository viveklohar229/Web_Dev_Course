console.log("Hey I am conditional tutorial")

let age = 18;
// let grace =  2;

// age += grace;
// console.log(age)

// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age % grace)
// console.log(age ** grace)

// if( (age + grace) > 18){
//     console.log("You can drive");
// }

// if(age==18){
//     console.log("You can drive");
// }

// else{
//     console.log("You cannot drive");
// }

if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding");
}
else if (age == 1) {
    console.log("Are you again kidding");
}

else {
    console.log("You cannot drive");
}


let a = 6;
let b = 8;
let c = a > b ? (a - b) : (b - a)
console.log(c)

/*

translate to:
if(a>b){
    let c = a - b;
}
else{
    let c = a - b;
}

*/
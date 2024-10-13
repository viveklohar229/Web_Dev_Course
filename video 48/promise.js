// alert('harry');
console.log('This is promise');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes, i am done")
            resolve("Vivek")
        }, 3000);

    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes, i am done 2")
            resolve("Vivek 2")
        }, 3000);

    }
})

// prom1.then((a) => {
//     console.log(a);

// }).catch((err) =>{
//     console.log(err);

// })

// let p3 = Promise.all([prom1, prom2])
// p3.then((a) => {
//     console.log(a);

// }).catch((err) => {
//     console.log(err);

// })
let p3 = Promise.race([prom1, prom2])
p3.then((a) => {
    console.log(a);

}).catch((err) => {
    console.log(err);

})
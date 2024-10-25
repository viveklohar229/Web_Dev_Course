function getData(){
    return new  Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(455)
        }, 3500);
    })
}
console.log('Loading modules');
console.log('Do something else');
console.log('Load Data');
let data = getData()
data.then((v) =>{

    console.log(data);
    console.log('Process Data');
    console.log('Task 2');
})
    
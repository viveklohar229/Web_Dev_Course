console.log("Vivek is a hacker");
console.log("Amit is a hecker");

// setInterval(() => {
//     console.log("I am inside settiment 1")
// }, 1000);

// setInterval(() => {
//     console.log("I am inside settiment 2")
// }, 2000);

console.log("The End");

const fn = () => {
    console.log("Nothing")

}

const callback = (arg, fn) => {
    console.log(arg);
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("Script");
    sc.src = src;
    sc.onload = callback("Vivek" , fn)
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
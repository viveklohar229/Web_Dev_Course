console.log("vivek")

// let bj = document.getElementsByClassName("box")
// console.log(bj)

// bj[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e =>{
//     // console.log(e)
//     e.style.backgroundColor = "green"
// })

let divbox = document.getElementsByTagName("div")
console.log(divbox)

divbox[4].matches("#redbox")
divbox[4].closest("#redbox")


document.querySelector(".container").contains(divbox[2])

document.querySelector("body").contains(document.querySelector("body"))

document.querySelector(".container").contains(document.querySelector("body"))

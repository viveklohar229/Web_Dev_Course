let button = document.getElementById("btn")
// List of all mouse Event 
// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
// button.addEventListener("click", () => {
//     document.querySelector(".box").innerHTML = "<b> Yayy you were clicked</b> Enjoy your click!"
// })

// button.addEventListener("dblclick", () => {
//     document.querySelector(".box").innerHTML = "<b> Yayy you were clicked</b> Enjoy your click!"
// })

// button.addEventListener("contextmenu", () => {
//     alert("on't hack us by right click Please")
// })

document.addEventListener("keydown", (e) => {
    console.log(e, e.key , e.keyCode)
})
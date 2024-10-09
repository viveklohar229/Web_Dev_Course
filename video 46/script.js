let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by vivek</b>";
div.setAttribute("class", "created");
// // document.querySelector(".container").append(div);
// // document.querySelector(".container").after(div);
// // document.querySelector(".container").before(div);
// document.querySelector(".container").prepend(div);

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend", "<b> i'm inserted </b>" )
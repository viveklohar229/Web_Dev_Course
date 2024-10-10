function createCard(title, cName, views, monthOld, duration, thumbnail){
    // Finish this function 
    let viewStr
    if (views<1000){
         viewStr = views;
    }
    else if(views>1000000){
         viewStr = views/1000000 + "M";
    }
    else{
          viewStr = views/1000 + "K";
    }
    let html = ` <div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="Image">
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthOld} months ago </p>
            </div>
        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Backend | Sigma Web video #2", "CodeWithAV" , 5600000 , 7, "31.06" , "1.jpeg")

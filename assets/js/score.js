var scores = JSON.parse(localStorage.getItem("scores"))
var scoresUl = document.querySelector(".scoresList")
var clearBtn = document.querySelector(".clear")

clearBtn.addEventListener("click", function() {
    localStorage.clear()
    document.location.reload()
})

for(let i = 0; i < scores.length; i++) {
    var li = document.createElement("li")
    li.innerHTML = scores[i].initials + " - " + scores[i].score
    scoresUl.append(li)
}
var startBtn = document.querySelector(".startBtn")
var endGameSection = document.querySelector(".endGame")
endGameSection.style.display = "none"
var opener = document.querySelector(".opener")
var question = document.querySelector(".question")
var choices = document.querySelector(".choices")
var timerEl = document.querySelector(".timerEl")
var quiz = document.querySelector(".quiz")
var output = document.querySelector(".output")
var initialsInput = document.querySelector(".initialsInput")
var sbmtBtn = document.querySelector(".sbmtBtn")

var index = 0;
var score = 0;
var timeLeft = 2;
let time;

var quizValues = [
    {
        question: "What attribute goes in an href to send someone to another webiste?",
        choices: ["A. src=''", "B. href=''", "C. link=''", "D. charset=''"],
        correct: "B. href=''"
    },
    {
        question: "What is a CSS file for?",
        choices: ["A. functionality", "B. skeleton of page", "C. styling", "D. Math"],
        correct: "C. styling"
    },
    {
        question: "which tag do we use to link a js file to html?",
        choices: ["A. Link", "B. Anchor", "C. Script", "D. Meta"],
        correct: "C. Script"
    },
    {
        question: "What is a h1-5 tag for?",
        choices: ["A. Paragraphs", "B. Lists", "C. Navigation", "D. Headers"],
        correct: "D. Headers"
    },
    {
        question: "What tag is used for ordered lists?",
        choices: ["A. ul", "B. li", "C. a", "D. ol"],
        correct: "D. ol"
    }
]

startBtn.addEventListener("click", function () {
    startQuiz(index)
    time = setInterval(function() {
        timeLeft--
        timerEl.innerHTML = "Time: " + timeLeft
    }, 1000)
    if(timeLeft === 0) {
        clearInterval(time)
        timerEl.innerHTML = "Times Up!"
        endGame()
    }
})

function startQuiz(index) {
    opener.style.display = "none"
    choices.innerHTML = ""
    question.innerHTML = quizValues[index].question
    var choiceSet = quizValues[index].choices;
    choiceSet.forEach(function (i) {
        var li = document.createElement('li')
        li.innerHTML = i
        choices.append(li)
        li.addEventListener("click", function () {
            if (li.innerHTML === quizValues[index].correct) {
                score = score + 20
                console.log("correct")
            } else {
                timeLeft = timeLeft - 10
            }
            index++
            if (index >= quizValues.length) {
                index = 0
                endGame()
            } else {
                startQuiz(index)
            }
        })
    })
}

var scoresHistory = JSON.parse(localStorage.getItem("scores")) || []

function endGame() {
    timerEl.innerHTML = "Game Over"
    quiz.style.display = "none"
    endGameSection.style.display = "block"
    output.innerHTML = "You got a score of: " + score
    sbmtBtn.addEventListener("click", function () {
        var initials = initialsInput.value
        var info = {
            initials: initials,
            score: score
        }
        scoresHistory.push(info)
        console.log(scoresHistory)
        localStorage.setItem("scores", JSON.stringify(scoresHistory))
    })
}

// 0625

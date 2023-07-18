var startBtn = document.querySelector(".startBtn")
var endGameSection = document.querySelector(".endGame")
endGameSection.style.display = "none"
var opener = document.querySelector(".opener")
var question = document.querySelector(".question")
var choices = document.querySelector(".choices")

var index = 0
var scores = 0;

var quizValues = [
    {
        question: "What attribute goes in an href to send someone to another webiste?",
        choices: ["A. src=''", "B. href=''", "C. link=''", "D. charset=''"],
        correct: "B. href=''"
    },
    {
        question: "What is a CSS file for?",
        choices: ["A. functionality", "B. skelaton of page", "C. styling", "D. Math"],
        correct: "C. Styling"
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

startBtn.addEventListener("click", function(event) {
    startQuiz(index)
})

function startQuiz(index) {
    opener.style.display = "none"
    question.innerHTML = quizValues[index].question
    var choiceSet = quizValues[index].choices;
    choiceSet.forEach(function(i) {
        var li = document.createElement('li')
         li.innerHTML = i
         choices.append(li)
    })
    // event.target
}

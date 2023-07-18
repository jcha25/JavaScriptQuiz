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
        question: "What color is the sky?",
        choices: ["A. Green", "B. Brown", "C. Blue", "D. Red"],
        correct: "C. Blue"
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

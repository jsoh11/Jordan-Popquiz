let startButton = document.querySelector(".start-btn");
let restartEl = document.querySelector(".restart-btn");
let questionContainerEl = document.querySelector("#question-container");
let questionEl = document.getElementById(".question");
let answerButtonEl = document.getElementById("#answer-btns");
let timerEl = document.querySelector("#timer-count")
startButton, addEventListener("click", startGame);

let timer;
let currentQuestion = {}

let questionsOptions = [
    {
        question: "what is 2+2?",
        answers: ["4", "18", "76", "9"],
        key: "0"
    },
    {
        question: "What color is the sky?",
        answer: ["Red", "yellow", "blue", "47"],
        key: 2,
    },
    {
        question: "A ____ is a true/false statement.",
        answer: ["String", "Number", "Boolean", "33"],
        key: 2,
    },
    {
        question: "How many states are in the in United States?",
        answer: ["30", "40", "50", "60"],
        key: 2,
    }
]
let questionIndex = Math.floor(Math.random() * questionsOptions.length)
currentQuestion = questionsOptions[questionIndex]


function startGame() {
    console.log("Started");
    startButton.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    timerCount = 75
    nextQuestion()
    setTime()
}



function nextQuestion() {
question.innerText = currentQuestion.question
answer.innerText = questionsOptions.answer

}



function selectAnswer() {


}

function setTime() {
    timer = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;

        if (timerCount === 0) {
            clearInterval(timer);
        }
    }, 10);

}



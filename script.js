let startButton = document.querySelector(".start-btn");
let restartEl = document.querySelector(".restart-btn");
let questionContainerEl = document.querySelector("#question-container");
let questionEl = document.querySelector(".question");
let answerButtonEl = document.querySelector("#answer-btns");
let timerEl = document.querySelector("#timer-count");
startButton, addEventListener("click", startGame);


let timer;
let currentQuestion = {};



let questionsOptions = [
    {
        question: "what is 2+2?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "8",
        correctChoice: "4"
        
    },
    {
        question: "What color is the sky?",
        choice1: "blue",
        choice2: "yellow",
        choice3: "24",
        choice4: "neon pink",
        correctChoice: "blue"
    },
    {
        question: "A ____ is a true/false statement.",
        choice1: "Array",
        choice2: "47",
        choice3: "Boolean",
        choice4: "Javascript",
        correctChoice: "Boolean"
    },
    {
        question: "How many states are in the in United States?",
        choice1: "20",
        choice2: "30",
        choice3: "79",
        choice4: "50",
        correctChoice: "50"
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



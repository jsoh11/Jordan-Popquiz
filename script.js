let startButton = document.querySelector(".start-btn");
let questionContainerEl = document.querySelector("#question-container");
let questionEl = document.getElementById(".question");
let answerButtonEl = document.getElementById("#answer-btns");
startButton,addEventListener("click", startGame);

let shuffledQuestions, currentQuestionIndex


function startGame() {
console.log("Started");
startButton.classList.add('hide');
questionContainerEl.classList.remove('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
nextQuestion()

}

function nextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionEl.innerText = question.question
    
}

function selectAnswer() {


}

function setTime() {


}

const questions = [
    {
        question: 'What is 2+2?',
        answers: [
            { text: '4', correct: true },
            { text: '72', correct: false }
        ]
    }
]
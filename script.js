let timerEl = document.querySelector(.timer)
let questionBtn = document.querySelector(.question)
let box = document.querySelector(.container)

function startQuiz () {

    timerCount = 75;
    startTimer()
}

function startTimer () {
    timer = setInterval(function(){
        timerCount--;
        timerEl.innerHTML = timerCount;
    }, 1000);
}
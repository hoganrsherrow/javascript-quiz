// Score reset
var score = 0;
// Grab the Start Quiz button by id
var startQuizButton = document.getElementById("start-quiz");
// Grab div to hold quiz information
var quizHolder = document.getElementById("questions");
// start quiz event listener
function startQuiz() {
    
}
// Create timer
function addTimerEl() {
    var timerEl = document.createElement("div");
    timerEl.classList.add("timer");
    quizHolder.appendChild(timerEl);


    setInterval(updateTimer, 1000)
}
// update timer
function updateTimer() {
    var time = 300;
    var minutes = Math.floor(time / 60);
    let seconds = time % 60;
    let timerEl = document.getElementsByClassName("timer");

    seconds = seconds < 10 ? '0' + seconds : seconds;
    timerEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}
// This array will hold the questions and answers
questions = [
    {
        question: "Is a Javasript a coding language?",
        answer: "yes"
    },
    {
        question: "How many cores does javascript use?",
        answer: "one"
    },
    {
        question: "True or false: NaN === NaN",
        answer: "false"
    },
    {
        question: "What is the output?\nfunction myName() {\n\tconsole.log(name);\n\tlet name = 'George';\n}",
        answer: "ReferenceError"
    }

]
startQuizButton.addEventListener("click", addTimerEl);

console.log(startQuizButton.textContent);
// Score reset
var score = 0;
// Time reset
var time = 300
// Grab the Start Quiz button by id
var startQuizButton = document.getElementById("start-quiz");
// Grab div to hold quiz information
var quizHolder = document.getElementById("questions");
// start quiz event listener
function startQuiz() {
    addTimerEl();
    var timerEl = document.getElementById("timer");
    var timerHolder = document.getElementById("timer-holder");
    
    setInterval(updateTimer, 1000);
}
// Create timer
function addTimerEl() {
    var timerEl = document.createElement("div");
    timerEl.id = "timer-holder";
    quizHolder.appendChild(timerEl);
}
// update timer
function updateTimer() {
    var timer = document.getElementById("timer-holder");
    var minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.innerHTML = `<p class='timer' id='timer'>${minutes}:${seconds}</p>`;
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
startQuizButton.onclick = startQuiz;
// checks if timer element exists. If so, update timer.

console.log(startQuizButton.textContent);
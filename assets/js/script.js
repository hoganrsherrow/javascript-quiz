// Score reset
var score = 0;
// Time reset
var time = 300
// Grab the Start Quiz button by id
var startQuizButton = document.getElementById("start-quiz");
// Grab div to hold quiz information
var quizHolder = document.getElementById("questions");
// number tracker
var numOfQuestions = 0;
// start quiz function
function startQuiz() {
    addTimerEl();
    setInterval(updateTimer, 1000);
    var btnContainer = document.getElementById("btn-container");
    btnContainer.removeChild(startQuizButton);
    for (let i = 0; i < questions.length; i++) {
        if (time > 0) {
            createQuestionEl();
            // validate answer
            var userAnswer = document.getElementById("user-answer");
            var answerBtn = document.getElementById("answer-btn");
            answerBtn.onclick = () => {
                if (userAnswer.value === questions[numOfQuestions].answer) {
                    score += 10;
                    alert("Your answer is correct! Your score is now " + score);
                } else {
                    alert("Your answer is incorrect");
                }
                console.log("I was clicked");
                console.log(userAnswer.value);
                console.log(questions[numOfQuestions].answer);
                numOfQuestions++;
            }

        } else {
            alert("Time is out");
        }

    }

};
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
questions = [{
        question: "Is Javasript a coding language?",
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

];
// Show question
function createQuestionEl() {
    var questionEl = document.createElement("div");
    questionEl.id = "quiz-question";
    questionEl.textContent = questions[numOfQuestions].question;
    quizHolder.appendChild(questionEl);
    createAnswerFormEl();
}
// create answer submission form
function createAnswerFormEl() {
    var answerFormEl = document.createElement("div");
    answerFormEl.classList = "answer-form";
    answerFormEl.innerHTML = `<input type="text" id="user-answer" name="user-answer" placeholder="Your Answer"><button type="button" id="answer-btn">Submit Answer</button>`;
    quizHolder.appendChild(answerFormEl);
}
function endQuiz() {
    // Clear contents and display score, offer iniials and high score save
}
startQuizButton.onclick = startQuiz;

// Use buttons to launch next question instead of loop. Use another set Interval function to invoke endQuiz().
// Score reset
var score = 0;
// Time reset
var time = 300
// Grab the Start Quiz button by id
var startQuizButton = document.getElementById("start-quiz");
// Grab div to hold quiz information
var quizHolder = document.getElementById("questions");
// number tracker
var i = 0;
// view high scores
var highScoreCheckerEl =  document.getElementById("high-scores");
// start quiz function
function startQuiz() {
    addTimerEl();
    setInterval(updateTimer, 1000);
    var btnContainer = document.getElementById("btn-container");
    btnContainer.removeChild(startQuizButton);
    createQuestionEl();
    // validate answer
    var answerBtn = document.getElementById("answer-btn");
    answerBtn.onclick = answerValidation;

};
// Create timer
function addTimerEl() {
    var timerEl = document.createElement("div");
    var highScoresEl = document.getElementById("high-scores");
    var btnContainer = document.getElementById("btn-container");
    timerEl.id = "timer-holder";
    highScoresEl.after(timerEl);
}
// update timer
function updateTimer() {
    var timer = document.getElementById("timer-holder");
    if (time > 0) {
        var minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timer.innerHTML = `<p class='timer' id='timer'>${minutes}:${seconds}</p>`;
        time--;
    } else {
        endQuiz();
    }

    // OR, use if statement here to call endQuiz() once time hits 0
}
// This array will hold the questions and answers
questions = [{
        question: "Is Javasript a coding language?",
        answer: "Yes",
        nonAnswer: "No"
    },
    {
        question: "How many cores does javascript use?",
        answer: "one",
        nonAnswer: "zero",
        nonAnswer: "three",
        nonAnswer: "four"
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
    questionEl.textContent = questions[i].question;
    quizHolder.appendChild(questionEl);
    createAnswerFormEl();
}
// create answer submission form
function createAnswerFormEl() {
    var answerFormEl = document.createElement("div");
    answerFormEl.classList = "answer-form";
    answerFormEl.innerHTML = `<input type="text" id="user-answer" name="user-answer" placeholder="Your Answer"><button type="button" id="answer-btn" class="btn">Submit Answer</button>`;
    quizHolder.appendChild(answerFormEl);
}

function endQuiz() {
    // Clear contents and display score, offer iniials and high score save
    quizHolder.innerHTML = "";
    console.log("Your quiz has ended");
    checkHighScore();
}
// answer validation and next question population
function answerValidation() {
    var userAnswer = document.getElementById("user-answer");
    if (userAnswer.value === questions[i].answer) {
        score += 10;
        alert("Your answer is correct! Your score is now " + score);
    } else {
        alert("Your answer is incorrect");
        time -= 60;
    }
    console.log("I was clicked");
    console.log(userAnswer.value);
    console.log(questions[i].answer);
    i++;
    if (i < questions.length) {
        //Clear contents before adding next questions
        quizHolder.innerHTML = "";
        createQuestionEl();
        //validateAnswer();
        var answerBtn = document.getElementById("answer-btn");
        answerBtn.onclick = answerValidation;
    } else {
        endQuiz();
    }
}

function checkHighScore() {
    if (localStorage.highScore) {
        if (score > localStorage.highScore) {
            setHighScore();
        }
    } else {
        setHighScore();
    }
}

function setHighScore() {
    var mainEl = document.getElementById("main");
    var initialsEl = document.createElement("div");
    initialsEl.id = "initials-container";
    initialsEl.innerHTML = `<input type="text" id="initials-input" class="input" placeholder="Your Initials"><button type="button" id="initials-btn" class="btn">Submit Initials</button>`;
    mainEl.appendChild(initialsEl);
    var initialsBtn = document.getElementById("initials-btn");
    var initialsInput = document.getElementById("initials-input");
    initialsBtn.onClick = () => {
        console.log("The initials button was clicked");
        var initials = initialsInput.value;
        localStorage.setItem("initials", `${initials}`);
        localStorage.setItem("highScore", `${score}`);
        console.log(localStorage.getItem("highScore"));
        initialsEl.innerHTML = `<p>Thanks for playing!</p>`;
    };
    initialsBtn.addEventListener("click", () => {
        console.log("The initials button was clicked");
    });
}
function viewHighScores() {
    var highScoreInitials = localStorage.getItem("initials");
    var highScore = localStorage.getItem("highScore");
    var highScoresContainer = document.getElementById("high-scores");
    var highScoreDisplay = document.createElement("div");
    highScoreDisplay.id = "high-score-display";
    highScoreDisplay.innerHTML = `<div>Initials: ${highScoreInitials}</div><div>High Score: ${highScore}</div>`;

    highScoresContainer.appendChild(highScoreDisplay);
}
startQuizButton.onclick = startQuiz;
highScoreCheckerEl.addEventListener("click", viewHighScores);

// Use buttons to launch next question instead of loop. Use another set Interval function to invoke endQuiz().
// Alternatively, use if statement in updateTimer() function to call
// endQuiz() when time = 0
// needs to be multiple choice
// time needs to be subtracted when incorrec answers are selected
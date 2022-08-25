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
    var highScoresEl = document.getElementById("high-scores")
    timerEl.id = "timer-holder";
    highScoresEl.appendChild(timerEl);
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
    answerFormEl.innerHTML = `<input type="text" id="user-answer" name="user-answer" placeholder="Your Answer"><button type="button" id="answer-btn">Submit Answer</button>`;
    quizHolder.appendChild(answerFormEl);
}

function endQuiz() {
    // Clear contents and display score, offer iniials and high score save
    quizHolder.innerHTML = "";
    console.log("Your quiz has ended");
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
startQuizButton.onclick = startQuiz;

// Use buttons to launch next question instead of loop. Use another set Interval function to invoke endQuiz().
// Alternatively, use if statement in updateTimer() function to call
// endQuiz() when time = 0
// needs to be multiple choice
// time needs to be subtracted when incorrec answers are selected
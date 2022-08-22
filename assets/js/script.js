console.log("This works.");
var score = 0;
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

console.log(questions[1].question);
console.log(questions[0].answer);
console.log(score);
score++;
console.log(score);
console.log(questions[3].question);
console.log(questions[3].answer);
const quizData = [
    {
        question: "1. Which HTML attribute is used to define inline styles?",
        a: "Class",
        b: "Style",
        c: "Font",
        d: "All of Above",
        correct: "b"
    },
    {
        question: "2. What is the correct place to insert a JavaScript?",
        a: "The 'head' section",
        b: "The 'body' section",
        c: "All of the above",
        d: "Both the 'head' section and the 'body' section",
        correct: "d"
    },
    {
        question: "3. How do you write 'Hello World' in an alert box?",
        a: "alert('Hello World')",
        b: "alertBox('Hello World')",
        c: "msgBox('Hello World')",
        d: "msg('Hello World')",
        correct: "a"
    },
    {
        question: "4. How you can create a function in JavaScript?",
        a: "function = myFunction()",
        b: "function myFunction()",
        c: "function => myFunction()",
        d: "function:myFunction()",
        correct: "b"
    },
    {
        question: "5. How you can add comment in JavaScript?",
        a: "//comment",
        b: "</comment",
        c: "<<comment",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "6. How you can declare array in JavaScript?",
        a: "var size = [ 'round', 'rectangle', 'square']",
        b: "var size = {'round', 'rectangle', 'square'}",
        c: "var size = ('round', 'rectangle', 'square')",
        d: "var size = <'round', 'rectangle', 'square'>",
        correct: "a"
    },
    {
        question: "7. What is 'this' keyword is used for in JavaScript?",
        a: "To refer to the object on which method is being invoked",
        b: "To refer to an object in the function",
        c: "",
        d: "All of the above",
        correct: "a"
    },
    {
        question: "8. What does the parseFloat() method does in JavaScript?",
        a: "It returns number as a number",
        b: "It returns a string, with a number written with a specified length",
        c: "It parses a string and returns a number",
        d: "It returns number as a string",
        correct: "c"
    },
    {
        question: "9. To access and HTML element, what method does the JavaScript uses?",
        a: "toExponential()",
        b: "element.addEventListener(event, function, useCapture)",
        c: "document.getElementById(id) method",
        d: "none of the above",
        correct: "c"
    },
    {
        question: "10. Which of the following is NOT correct for the JavaScript",
        a: "You need a compiler to compile the scripts of JavaScript",
        b: "JavaScript is totally different from Java",
        c: "JavaScript can be embedded within HTML",
        d: "A file containing JavaScript can be viewed in a local browser with JavaScript enabled",
        correct: "a"
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
        
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer1 = getSelected();

    if (answer1) {
        if (answer1 === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++


        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =
            `
                <h2>You answered ${score}/${quizData.length} question correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
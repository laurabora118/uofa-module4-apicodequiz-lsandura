// Write my JavaScript
var timerE1 = document.getElementById('countdown');
var myquizE1 = document.getElementById('myquiz');
var myanswersE1 = document.getElementById('myanswers');
//var counter = document.querySelector("#counter");


//set interval for timer, and can repeat, look at set interval activities
//1000 milisecond
var testTimerE1 = document.querySelector(".testtimer");
var timeE1 = document.getElementById("time");
var secondsLeft = 20;

function setTime() {
    var timerInterval = setInterval(function() {
        minutesLeft--;
        timeE1.textContent = minutesLeft;
        if(minutesLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        
        }
    }, 1000);

}

//function to send time is up, your quiz resultes
function sendMessage() {
    timeE1.textContent = " ";
    var endtimer = document.createElement("quizend");
    quizendE1.setAttribute("src");
    console.log("quiz end");
}

//show answer choices
function renderNumbers() {
    var numbers = [
        '1',
        '2',
        '3',
    ];
}

//shows answer selections on click



//Function for checking answers
function checkAnswers () {
    if (question1 !== "2") {
        alert("correct");}
        else {alert("not correct");}
        }





//Button For Starting Quiz
var quizstart = document.getElementById("quizstart");
console.log("start quiz");

quizstartBTN.addEventListener("click", showQuestions);
//quizstart.addEventListener("click", getquizStart);

  
//Button for Getting Solutions
var answersstart = document.getElementById("answersstart");
console.log("get solutions");

answersstartBTN.addEventListener("click", showAnswers);
//answersstart.addEventListener("click", getshowAnswers);


// JavaScript Questions
var directions1234 = "Please read carefully and select from the numbers 1, 2 or 3 to answer the question"
var questions = message.split('');

var question1 = "What is written at the end of the JavaScript file?";
var option1 = "1 - .javascript 2 - .jscript 3 - .js";
var qanswer1 = "3";

var question2 = "Which section is the JavaScript script reference added to in the index?";
var option2 = "1 - Header 2 - Body 3 - Footer";
var qanswer2 = "2";

var question3 = "How do you console log Hello World! in JavaScript?";
var option3 = "1 - CONSOLELOG “Hello World!” 2 - (Console Log {“hello” + “world”}) 3 - console.log(“Hello world!”)";
var qanswer3 = "3";

var question4 = "Fill in the blank. Boolean, Number, String, and Object are some examples of JavaScript ______ types.";
var option4 = "1 - Functional 2 - Data 3 - Variable";
var qanswer4 = "2";

//Function to show questions
function showQuestions() {
    var questionsLeft = 4;

var questionsInterval = setInterval(function () {
    if (questionsLeft > 4) {
        questionsleftE1.textContent = questionsLeft + '4 questions left';
        quesitonsLeft--;
    } else if (questionsLeft === 3) {
        questionsleftE1.textContent = questionsLeft + '3 questions left';
        questionsLeft--;
    } else if (questionsLeft === 2) {
        questionsLeftE1.textContent = questionsLeft + '2 questions left';
        questionsLeft--;
    } else if (questionsLeft === 1) {
        questionsLeftE1.textContent = questionsLeft + '1 question left';
        questionsLeft--;
    } else {
        questionsleftE1.textContent = '';
        clearInterval(questionsInterval);
        displayQuestions();
    }
    }, 1000);
}


// Function to display message 1 question at a time
function displayQuestions() {
    var quizStart = 0;

    var questionInterval = setInterval(function () {
        if (questions[quizStart] === undefined) {
            clearInterval(questionInterval);
        } else {
            myquizE1.textContent = questions[quizStart];quizStart++;
        }
    }, 1000);
}

//Function to show questions
function showAnswers() {
    var answersLeft = 4;

var answersInterval = setInterval(function () {
    if (answersLeft > 4) {
        answersleftE1.textContent = answersLeft + '4 answers left';
        answersLeft--;
    } else if (answersLeft === 3) {
        answersleftE1.textContent = answersLeft + '3 answers left';
        answersLeft--;
    } else if (answersLeft === 2) {
        answersLeftE1.textContent = answersLeft + '2 answers left';
        answersLeft--;
    } else if (answersLeft === 1) {
        answersLeftE1.textContent = answersLeft + '1 answers left';
        answersLeft--;
    } else {
        answersleftE1.textContent = '';
        clearInterval(answersInterval);
        displayQuestions();
    }
    }, 1000);
}


//Function to show answers 1 at a time
function displayAnswers() {
    var answersStart = 0;

    var answerInterval = setInterval(function () {
        if (answers[answerStart] === undefined) {
            clearInterval(answerInterval);
        } else {
            myanswersE1.textContent = answerss[answersStart];answersStart++;
        }
    }, 1000);
}

// JavaScript Answers
var answers1234 = "Please read carefully and select from the numbers 1, 2 or 3 to answer the question"
var answers = message.split('');

var qanswers1 = "What is written at the end of the JavaScript file?";
var qanswers1 = "3 - .js";
var correctanswer1and3 = "3";

var qanswers2 = "Which section is the JavaScript script reference added to in the index?";
var qanswers2 = "2 - Body";
var correctanswer2and4 = "2";

var qanswers3 = "How do you console log Hello World! in JavaScript?";
var answers3 = "3 - console.log(“Hello world!”)";
//var correctanswer1and3 = "3";

var qanswers4 = "Fill in the blank. Boolean, Number, String, and Object are some examples of JavaScript ______ types.";
var qanswers4 = "1 - Functional 2 - Data 3 - Variable";
//var correctanswer2and4 = "2";


function displayScore(){

}

//local storage for saving high score OR saving high scores
function SaveScore(){
    var sscores = scoresresponse;
    localStorage.setItem("sscores", JSON.stringify(sscores));
    console.log("save scores to local storage")
};

function GetScores() {
    let gscores = scoressaved.getItem('gscores')
    console.log("get scores from local storage")
    myscores.textContent = gscores;
    console.log("show scores to placeholder")
}

evaluate.addEventListener("click", SaveScores);
record.addEventListener("click", GetScores);


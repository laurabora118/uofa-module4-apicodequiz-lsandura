// Write my JavaScript
//QUIZ
var myquizE1 = document.getElementById('myquiz');
//ANSWERS
var myanswersE1 = document.getElementById('myanswers');
//TIMER
var timerE1 = document.getElementById('countdown');
//BUTTON
//var counter = document.querySelector("#counter");
var qbtn = document.getElementById("qBtn");
var abtn = document.getElementById("aBtn");

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

//TIMER NOTES
// // Selects element by class
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();

//INTERVAL NOTES
// var timerEl = document.getElementById('timerspot');
// var mainEl = document.getElementById('main');

// var message =
//   'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
// var words = message.split(' ');

// Timer that counts down from 5
// function countdown() {
//   var timeLeft = 5;

//   // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var timeInterval = setInterval(function () {
//     // As long as the `timeLeft` is greater than 1
//     if (timeLeft > 1) {
//       // Set the `textContent` of `timerEl` to show the remaining seconds
//       timerEl.textContent = timeLeft + ' seconds remaining';
//       // Decrement `timeLeft` by 1
//       timeLeft--;
//     } else if (timeLeft === 1) {
//       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//       timerEl.textContent = timeLeft + ' second remaining';
//       timeLeft--;
//     } else {
//       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//       timerEl.textContent = '';
//       // Use `clearInterval()` to stop the timer
//       clearInterval(timeInterval);
//       // Call the `displayMessage()` function
//       displayMessage();
//     }
//   }, 1000);
// }

// // Displays the message one word at a time
// function displayMessage() {
//   var wordCount = 0;

//   // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
//   var msgInterval = setInterval(function () {
//     // If there are no more words left in the message
//     if (words[wordCount] === undefined) {
//       // Use `clearInterval()` to stop the timer
//       clearInterval(msgInterval);
//     } else {
//       // Display one word of the message
//       mainEl.textContent = words[wordCount];
//       wordCount++;
//     }
//   }, 1000);
// }

// countdown();

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
quizstart.addEventListener("click", showQuestions);
//quizstart.addEventListener("click", getquizStart);

  
//Button for Getting Solutions
var answersstart = document.getElementById("answersstart");
console.log("get solutions");
//answersstart.addEventListener("click", getshowAnswers);


// JavaScript Questions
var directions1234 = "Please read carefully and select from the numbers 1, 2 or 3 to answer the question"
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
var questions = message.split(' ');



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
        questionsleft.textContent = '';
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

evaluate.addEventListener("click", SaveScore);
record.addEventListener("click", GetScores);
quizstart.addEventListener("click", showQuestions);
answersstart.addEventListener("click", showAnswers);    

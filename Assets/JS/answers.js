var answersstart = document.getElementById("answersstart");
//ANSWERS
var myanswersE1 = document.getElementById('myanswers');

// //Function to show questions
// function showAnswers() {
//     var answersLeft = 4;
//     var answersInterval = setInterval(function () {
//     if (answersLeft > 4) {
//         answersleftE1.textContent = answersLeft + '4 answers left';
//         answersLeft--;
//     } else if (answersLeft === 3) {
//         answersleftE1.textContent = answersLeft + '3 answers left';
//         answersLeft--;
//     } else if (answersLeft === 2) {
//         answersLeftE1.textContent = answersLeft + '2 answers left';
//         answersLeft--;
//     } else if (answersLeft === 1) {
//         answersLeftE1.textContent = answersLeft + '1 answers left';
//         answersLeft--;
//     } else {
//         answersleftE1.textContent = '';
//         clearInterval(answersInterval);
//         displayQuestions();
//     }
//     }, 1000);
// }


// //Function to show answers 1 at a time
// function displayAnswers() {
//     var answersStart = 0;

//     var answerInterval = setInterval(function () {
//         if (answers[answerStart] === undefined) {
//             clearInterval(answerInterval);
//         } else {
//             myanswersE1.textContent = answerss[answersStart];answersStart++;
//         }
//     }, 1000);
// }

// // JavaScript Answers
// var answers1234 = "Please read carefully and select from the numbers 1, 2 or 3 to answer the question"
// var answers = message.split('');

// var qanswers1 = "What is written at the end of the JavaScript file?";
// var qanswers1 = "3 - .js";
// var correctanswer1and3 = "3";

// var qanswers2 = "Which section is the JavaScript script reference added to in the index?";
// var qanswers2 = "2 - Body";
// var correctanswer2and4 = "2";

// var qanswers3 = "How do you console log Hello World! in JavaScript?";
// var answers3 = "3 - console.log(“Hello world!”)";
// //var correctanswer1and3 = "3";

// var qanswers4 = "Fill in the blank. Boolean, Number, String, and Object are some examples of JavaScript ______ types.";
// var qanswers4 = "1 - Functional 2 - Data 3 - Variable";
// //var correctanswer2and4 = "2";


// function displayScore(){

// }


//save scores
// var scoresresponse = "scoresresponse for local storage";c
// //local storage for saving high score OR saving high scores
// function SaveScore(){
//     var sscores = scoresresponse;
//     localStorage.setItem("sscores", JSON.stringify(sscores));
//     console.log("save scores to local storage")
// };

// function GetScores() {
//     let gscores = scoressaved.getItem('gscores')
//     console.log("get scores from local storage")
//     myscores.textContent = gscores;
//     console.log("show scores to placeholder")
// }

// evaluate.addEventListener("click", SaveScore);
// record.addEventListener("click", GetScores);


answersstart.addEventListener('click', function (){
    console.log('test get answers')
});

// answersstart.addEventListener("click", showAnswers);    

// //Button for Getting Solutions
// var answersstart = document.getElementById("answersstart");
// console.log("get solutions");
// //answersstart.addEventListener("click", getshowAnswers);

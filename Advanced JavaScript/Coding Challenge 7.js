///////////////////////////
//Coding Challenge 7

//Function Constructor
function Question(theQuestion, answers, correctAnswer){
    this.theQuestion = theQuestion;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}

//Create a few questions with the constuctor
var question1 = new Question('What is my name?', ['Chase', 'John', 'David'], 'Chase');
var question2 = new Question('What is my favorite sport?', ['Baseball', 'Football', 'Tennis', 'Soccer'], 'Tennis');
var question3 = new Question('What year was I born?', ['1934', '1995', '2002'], '1995');

//Store them inside an array
var questionArray = [question1, question2, question3];

//Select a random question and log it to console with possible answers
function randomQuestion(){
    var randValue = Math.floor(Math.random() * Math.floor(3)); //Random int 0, 1, or 2
    var randQuestion = questionArray[randValue];

    console.log(randQuestion.theQuestion);
    for(var i = 0; i < randQuestion.answers.length; i++){
        console.log((i + 1) + '. ' + randQuestion.answers[i]);
    }

    var userAnswer = prompt("Please enter your answer (type a number):");
    if(randQuestion.answers[userAnswer - 1] === randQuestion.correctAnswer){
        console.log('Correct!');
    } else{
        console.log('Incorrect!');
    }
}

randomQuestion();









































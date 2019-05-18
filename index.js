let score = 0;
let currentQuestion = 0;


function showWelcomeScreen(){
    $('main').html(welcomeTemplate());
    
}

function welcomeScreen() {
    showWelcomeScreen();
    $('.questionScreen').hide();
    $('.kickOffbutton').click(questionScreen);
}

function questionScreen() { 
    $('.welcomeScreen').hide();
    $('.showSummary').hide();
    $('.questionScreen').show();
    let question = questions[currentQuestion];
    $('.questionScreen h2').text(question.title);
    const answer = $('.questionScreen ul');
    if (answer.length === 0){
        $('.questionScreen').append('<ul></ul>');
    }
    
    for (let i=0; i<question.answers.length; i++){
        $('.questionScreen ul').append(`<label class="answer">
        <input type = "radio" id="${i}"  name ="answerOption" required>${question.answers[i]}<br>
        </label>`
        );   
    }  
 } 

 // changes the counter of questions on every screen
 function questionNumberCounter(){
     currentQuestion++;
     $('.questionCounter').text(currentQuestion+1);
 }

function checkAnswer() {
    //this function will display result of the answers to the questions, correct and incorrect answers will have seperate screens
    $('.questionScreen button').click(function(e) {
        e.preventDefault();
        let correctAnswer = questions[currentQuestion].correct;
        const isCorrect = correctAnswer === parseInt ($('input:checked').attr('id'),10);
        showResult(isCorrect);    
});    
} //end of checkAnswer function 


function showResult(isCorrect) {
    if (isCorrect) {
        correctAnswerScreen();
        currentScore();       
    } else {
        inCorrectAnswerScreen();
    } //end if statement 
} // end shorResult function

 //adds 1 to current score
function scoreAddedTocorrectAnswer(){
    score++;
}

//takes total score and renders
function currentScore() {
    scoreAddedTocorrectAnswer();
    $('.scoreCounter').text(score);
}

function correctAnswerScreen(){
    let correctAnswer = questions[currentQuestion].correct;
    $('.questionScreen').html( `<div class="questionResultScreen">
    <h2> You got it!!! <br>A natural baller</h2>
   <button type="button" class="buttonToGetToNextQuestion">Next Question</button> </div>`);
    } //end of correctAnswerScreen

function inCorrectAnswerScreen(){
    let correctAnswer = questions[currentQuestion].correct;
    $('.questionScreen').html(`<div class="questionResultScreen">
     <h2> Better Luck next time</h2>
    <button type="button" class="buttonToGetToNextQuestion">Next Question</button> </div>`);
} //end of incorrectAnswerScreen

function nextQuestionButton () {
    $('main').on('click', '.buttonToGetToNextQuestion', function(e) {
        //changeQuestionNumber(); create this function to increment the question counter on screen
        questionNumberCounter();
        questionScreen();
        checkAnswer();
        

    });
} //end of nextquestionButton funciton 

//this function will display the final screen if correct>=6 with
function showPassedSummary() {
$('.showSummary').html(`<h2>Summary of your quiz</h2>
    <p>You scored ${score} out of 10 correct</p>
    <button type="button" class="kickOffbutton">Retake Quiz</button>`);
}

//this function will display the final screen if correct<6
function showFailedSummary() {
$('.showSummary').html(`<h2>Summary of your quiz</h2>
    <p>You scored ${score} out of 10 correct</p>
    <h2>Kick harder next time</>
    <button type="button" class="kickOffbutton">Retake Quiz</button>`);
}

function showSumary() {
if (score>=6) 
    {showPassedSummary();}
    else showFailedSummary();
}
function restartQuiz() {
    //restarts quiz at the end

}


function handleSoccerQuiz(){
     welcomeScreen();
     checkAnswer();
     nextQuestionButton();

}

$(handleSoccerQuiz);




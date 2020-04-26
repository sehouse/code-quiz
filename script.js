var questions = [

    {
        question: "what is the first letter of the alphabet?",
        answerA: "a",
        answerB: "b",
        answerC: "c",
        answerD: "d",
        correct: "A"
    },
    {
        question: "what is the second letter of the alphabet?",
        answerA: "a",
        answerB: "b",
        answerC: "c",
        answerD: "d",
        correct: "B"
    },
    {
        question: "what is the third letter of the alphabet?",
        answerA: "a",
        answerB: "b",
        answerC: "c",
        answerD: "d",
        correct: "C"
    }



]

var lastQuestion = (questions.length) - 1;
var questionsCorrect = 0;
var questionCounter = 0;
var gameTimer = 0;
var gameTime = 0;


$("#start-button").on("click", startGame);

function startGame() {
    $("#intro").hide();
    $("#nav").show();
    $("#quiz-content").show();
    showQuestion();
    timerStart();

}

function timerStart() {
    gameTime = 100;
    $("#timeLeft").text(gameTime);

    gameTimer = setInterval(function () {
        gameTime--;
        $("#timeLeft").text(gameTime);

        if (timeLeft <= 0) {
            clearInterval(gameTimer);
            endGame();
        }
    }, 1000);
    next();
}

function gameOver() {
    clearInterval(gameTimer);
    $("#quiz-content").hide();
    $("#quiz-over").show();
    $("#final-score").text(score);

}
function showQuestion() {
    var questionText = questions[questionCounter];
    $("#quiz-question").text(questionText.question);
    $("#answer-one").text(questionText.answerA);
    $("#answer-two").text(questionText.answerB);
    $("#answer-three").text(questionText.answerC);
    $("#answer-four").text(questionText.answerD);
}

function checkAnswer(answer) {
    if (answer === questions[questionCounter].correct) {
        questionsCorrect++;

    }
    if (questionCounter < lastQuestion) {
        questionCounter++;
        showQuestion();
    }
    else {
        gameOver();
    }

}

//start screen is nested in #intro
//quiz elements are nested in #quiz-content
//quiz question is #quiz-question
//buttons are #choice-one, #choice-two, #choice-three, #choice-four
//button spans are #answer-one, #answer-two, #answer-three, #answer-four
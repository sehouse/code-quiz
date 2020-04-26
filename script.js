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
var score = 0


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
            gameOver();
        }
    }, 1000);
}

function gameOver() {
    clearInterval(gameTimer);
    $("#quiz-content").hide();
    $("#intro").show();

    var quizContent = `
        <h2>Game over!</h2>
        <h3>You got a ` + score + ` /100!</h3>
        <input type="text" id="name" placeholder="First name"> 
        <button onclick="setScore()">Set score!</button>`;

    document.getElementById("intro").innerHTML = quizContent;
}

function setScore() {
    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);
    getScore();
}

function getScore() {
    $("#intro").show();
    $("#quiz-content").hide();
    var quizContent = `
    <h2>` + localStorage.getItem("highscoreName") + `'s highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br> 
    
    <button onclick="clearScore()">Clear score!</button><button onclick="resetGame()">Play Again!</button>
    
    `;

    document.getElementById("intro").innerHTML = quizContent;
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
        score += 10;

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
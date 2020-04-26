// An array of questions, using objects to give the elements of the question.

var questions = [

    {
        question: "Where in the body do we put the JQuery link?",
        answerA: "Middle",
        answerB: "Bottom",
        answerC: "Top",
        answerD: "Nowhere",
        correct: "B"
    },
    {
        question: "What tag do we use to write JavaScript?",
        answerA: "<html>",
        answerB: "<footer>",
        answerC: "<body>",
        answerD: "<script>",
        correct: "D"
    },
    {
        question: "If we want to use the browser to say something to the user, we would use: ?",
        answerA: "alert()",
        answerB: "heyYou()",
        answerC: "listen()",
        answerD: "navi()",
        correct: "A"
    },

    {
        question: "What function combines the text of two strings and returns a new string?",
        answerA: "add()",
        answerB: "insert()",
        answerC: "append()",
        answerD: "concat()",
        correct: "D"
    },

    {
        question: "what syntax would we use to link external JS?",
        answerA: "<script name ='script.js'",
        answerB: "<script href ='script.js'",
        answerC: "<script src ='script.js'",
        answerD: "<script ref ='script.js'",
        correct: "C"
    },

    {
        question: "What is a DOM?",
        answerA: "The best friend in Gears",
        answerB: "Document Object Model",
        answerC: "Dig Only Mud",
        answerD: "Down On Main",
        correct: "B"
    },

    {
        question: "How would we write a comment in JS?",
        answerA: "**comment**",
        answerB: "//comment",
        answerC: "^^comment",
        answerD: "#comment",
        correct: "B"
    },

    {
        question: "What is the number of the first value in an array?",
        answerA: "0",
        answerB: "1",
        answerC: "2",
        answerD: "3",
        correct: "A"
    },

    {
        question: "What do we use to check the value of a variable in JS?",
        answerA: "console()",
        answerB: "log()",
        answerC: "console.log()",
        answerD: "print()",
        correct: "C"
    },

    {
        question: "How would we write a function in JS?",
        answerA: "function = ()",
        answerB: "function := ()",
        answerC: "function : ()",
        answerD: "function ()",
        correct: "D"
    }

]

//Global Variables used in the quiz.

var lastQuestion = (questions.length) - 1;
var questionCounter = 0;
var gameTimer = 0;
var gameTime = 0;
var score = 0

//JQuery to start the game when the start button is clicked.

$("#start-button").on("click", startGame);

// A function to control what happens when the start button is clicked, hiding some HTML elements, starting the timer, and displaying the questions.

function startGame() {

    $("#intro").hide();
    $("#quiz-content").show();
    showQuestion();
    timerStart();

}

// A function that displays the questions in the HTML body and buttons.

function showQuestion() {

    var questionText = questions[questionCounter];
    $("#quiz-question").text(questionText.question);
    $("#answer-one").text(questionText.answerA);
    $("#answer-two").text(questionText.answerB);
    $("#answer-three").text(questionText.answerC);
    $("#answer-four").text(questionText.answerD);
}

// A function that will check the user's answer to a question to determine if it is correct.

function checkAnswer(answer) {

    if (answer === questions[questionCounter].correct) {
        score += 10;

    }

    else {
        gameTime -= 5;
    }

    if (questionCounter < lastQuestion) {
        questionCounter++;
        showQuestion();
    }

    else {
        gameOver();
    }

}

// A function to control the timer and end the game if it hits 0.

function timerStart() {

    gameTime = 100;
    $("#timeLeft").text(gameTime);

    gameTimer = setInterval(function () {

        gameTime--;
        $("#timeLeft").text(gameTime);

        if (gameTime <= 0) {
            clearInterval(gameTimer);
            gameOver();

        }

    }, 1000);

}

// A function that changes the body of the quiz to the Game Over screen.

function gameOver() {

    clearInterval(gameTimer);
    $("#quiz-content").hide();
    $("#intro").show();

    var quizContent = `
        <h2>Game over!</h2>
        <h3>You got a ` + score + `!</h3>
        <input type="text" id="name" placeholder="Initials"> 
        <button onclick="setScore()">Set score!</button>`;

    document.getElementById("intro").innerHTML = quizContent;

}

// A function that saves the score to the local storage.

function setScore() {

    localStorage.setItem("highscore", score);
    localStorage.setItem("highscoreName", document.getElementById('name').value);

    getScore();

}
// A function that shows the user's high score.

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

// A function that will clear the user's high score.

function clearScore() {

    localStorage.setItem("highscore", "");
    localStorage.setItem("highscoreName", "");

    resetGame();
}

// A function that will reset the user's game.

function resetGame() {

    clearInterval(gameTimer);
    score = 0;
    questionCounter = 0;
    gameTimer = 0;
    gameTime = 0;

    $("#timeLeft").text(gameTime);
    startGame();
}
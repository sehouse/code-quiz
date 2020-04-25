var score = 0;
var questionCounter = 0;


$("#start-button").on("click", startGame);

function startGame() {
    $("#intro").hide();
    $("#quiz-content").show();
    showQuestion();

}

function showQuestion() {
    var questionText = questions[questionCounter];
    $("#quiz-question").text(questionText.question);
    $("#answer-one").text(questionText.answerA);
    $("#answer-two").text(questionText.answerB);
    $("#answer-three").text(questionText.answerC);
    $("#answer-four").text(questionText.answerD);
}

function checkAnswer() {
    if (questionCounter < questions.length) {
        questionCounter++;
        showQuestion();
    }
}

var questions = [

    {
        question: "what is the first letter of the alphabet?",
        answerA: "a",
        answerB: "b",
        answerC: "c",
        answerD: "d",
        correct: "1"
    },
    {
        question: "what is the second letter of the alphabet?",
        answerA: "a",
        answerB: "b",
        answerC: "c",
        answerD: "d",
        correct: "2"
    },
    {
        question: "what is the third letter of the alphabet?",
        answerA: "a",
        answerB: "b",
        answerC: "c",
        answerD: "d",
        correct: "3"
    }
]


//start screen is nested in #intro
//quiz elements are nested in #quiz-content
//quiz question is #quiz-question
//buttons are #choice-one, #choice-two, #choice-three, #choice-four
//button spans are #answer-one, #answer-two, #answer-three, #answer-four
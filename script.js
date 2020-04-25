$("#start-button").on("click", startGame);

$("#quiz-content").hide();

function startGame() {
    $("#intro").hide();
    $("#quiz-content").show();
}
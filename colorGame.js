var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeListeners();
    setUpSquares();
    reset();
}

function setUpModeListeners(){
 for (var i = 0; i < modeBtn.length; i++) {
    modeBtn[i].addEventListener("click", function () {
        modeBtn[0].classList.remove("selected");
        modeBtn[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
    });
}
}

function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
        //console.log("print" + i) ;
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct..!";
                changeColor(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play again?"
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}
function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New colors";
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
});

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = []
    for (var i = 0; i < num; i++) {
        arr.push(randomColors())
    }
    return arr;
}

function randomColors() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

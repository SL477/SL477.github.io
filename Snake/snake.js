let grid = document.querySelector(".grid");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let scoreDisplay = document.querySelector(".scoreDisplay");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let bottom = document.querySelector(".bottom");
let up = document.querySelector(".top");
let width = 10;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2,1,0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;

document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
    playAgain.addEventListener("click",replay);
    up.addEventListener("click", () => {direction = -width;});
    bottom.addEventListener("click", () => {direction = width;});
    left.addEventListener("click", () => {direction = -1;});
    right.addEventListener("click", () => {direction = 1;});
});



const createBoard = () => {
    popup.getElementsByClassName.display = "none";
    for (let i = 0; i < 100; i++) {
        let div = document.createElement("div");
        grid.appendChild(div);
    }
};

const startGame = () => {
    let squares = document.querySelectorAll(".grid div");
    randomApple(squares);
    //random apple
    direction = 1;
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
    currentSnake = [2,1,0];
    currentIndex = 0;
    currentSnake.forEach(index => {
        squares[index].classList.add("snake");
    });
    interval = setInterval(moveOutcome, intervalTime);
};

const moveOutcome = () => {
    let squares = document.querySelectorAll(".grid div");
    if (checkForHits(squares)) {
        alert("you hit something");
        popup.getElementsByClassName.display = "flex";
        return clearInterval(interval);
    }
    else {
        moveSnake(squares);
    }
};

const moveSnake = (squares) => {
    let tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);
    //movement ends here
    eatApple(squares, tail);
    squares[currentSnake[0]].classList.add("snake");
};

const checkForHits = (squares) => {
    if (
        (currentSnake[0] + width >= (width * width) && direction === width) ||
        (currentSnake[0] % width === width - 1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width <= 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains("snake")
    ) {
        return true;
    }
    else {
        return false;
    }
};

const eatApple = (squares, tail) => {
    if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[currentSnake[0]].classList.remove("apple");
        squares[tail].classList.add("snake");
        currentSnake.push(tail);
        randomApple(squares);
        score++;
        scoreDisplay.textContent = score;
        clearInterval(interval);
        intervalTime = intervalTime * speed;
        interval = setInterval(moveOutcome, intervalTime);
    }
};

const randomApple = (squares) => {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    }
    while(squares[appleIndex].classList.contains("snake"))
    squares[appleIndex].classList.add("apple");
};

function control(e) {
    //console.log("control",e.keyCode);
    if (e.keyCode === 39) {
        direction = 1;//right
    }
    else if (e.keyCode === 38) {
        direction = -width;//if we press the up arrow the snake will go ten divs up
    }
    else if (e.keyCode === 37) {
        direction = -1;//left the snake will go left one div
    }
    else if (e.keyCode === 40) {
        direction = +width;//down the snake head will instantky appear 10 divs below from the current div
    }
};

const replay = () => {
    grid.innerHTML = "";
    createBoard();
    startGame();
    popup.getElementsByClassName.display = "none";
};
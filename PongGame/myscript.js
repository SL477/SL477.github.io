var playerScore = 0;
var aiScore = 0;
var playerY = 0;

var ballX = 40;
var ballY = 40;
var vballX = 2;
var vballY = 2;

var myGameArea = {
	canvas : document.getElementById("canvas"),
	start : function() {
		this.context = this.canvas.getContext("2d");
		this.interval = setInterval(updateGameArea, 20);
	},
	clear : function() {
		this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
	}
}
var paddleHeight = myGameArea.canvas.height / 20;
function startGame() {
	myGameArea.canvas.setAttribute('width', window.innerWidth);
	myGameArea.canvas.setAttribute('height', window.innerHeight);
	paddleHeight = myGameArea.canvas.height / 20;
	myGameArea.start();
	updateGameArea();
	
	ballX = 40;
	ballY = 40;
	vballX = 2;
	vballY = 2;
}

function resetBall() {
	ballX = 40;
	ballY = 40;
	vballX = 2;
	vballY = 2;
}

function updateGameArea() {
	myGameArea.clear();
	console.log("playerY",playerY);
	console.log("myGameArea.canvas.height", myGameArea.canvas.height);
	
	//Draw the background
	myGameArea.context.fillStyle = "#000000";
	myGameArea.context.fillRect(0,0,myGameArea.canvas.width, myGameArea.canvas.height);
	
	//Draw the current scores
	myGameArea.context.fillStyle = "#FFFFFF";
	myGameArea.context.font = "30px Arial";
	myGameArea.context.fillText(playerScore, 40, 40);
	myGameArea.context.fillText(aiScore, myGameArea.canvas.width - 40, 40);
	
	//Draw the player paddle
	//The centre of the paddle needs to match the playerY
	//myGameArea.context.fillRect(x,y,width,height);
	myGameArea.context.fillRect(0, playerY - (paddleHeight / 2), 15, paddleHeight);
	
	//Draw the computer paddle
	myGameArea.context.fillRect(myGameArea.canvas.width - 20, ballY - (paddleHeight / 2), 15, paddleHeight);
	
	//Draw the ball
	//arc(x,y,radius, startAngle, endAngle)
	myGameArea.context.beginPath();
	myGameArea.context.arc(ballX, ballY, 20, 0, 2 * Math.PI);
	myGameArea.context.stroke();
	myGameArea.context.fill();
	
	//Update the ball
	ballX += vballX;
	ballY += vballY;
	
	//Check for collisions
	if (ballX <= 0) {
		//AI scored
		aiScore += 1;
		resetBall();
	}
	else if (ballX >= myGameArea.canvas.width) {
		//Player Scored
		playerScore += 1;
		resetBall();
	}
	else if (ballY <= 0 || ballY >= myGameArea.canvas.height)
	{
		//Hit the top or bottom of the area
		//vballX = -vballX;
		vballY = -vballY;
	}
}

function getMousePos(event) {
	playerY = event.clientY;
}
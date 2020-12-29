const canvas = document.getElementById('canvas');
const healthBox = document.getElementById('health');
const levelBox = document.getElementById('level');
const expBox = document.getElementById('exp');

let x = 75;
let y = 50;
let left = false;
let right = false;
let up = false;
let down = false;

let speed = 10;

let health = 100;
let maxHealth = 100;
let level = 1;
let exp = 0;
let levelExp = 100;

let width = 800;

const draw = () => {
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        //clear
        ctx.clearRect(0,0,canvas.width, canvas.height);

        /*ctx.beginPath();
        ctx.moveTo(x,y);
        ctx.lineTo(x + 25, y + 25);
        ctx.lineTo(x + 25, y - 25);
        ctx.fillStyle = "red";
        ctx.fill();*/
        //console.log('test');
        //console.log('width',canvas.width, 'height', canvas.height);

        ctx.fillStyle = "blue";
        //ctx.fillRect(10,10,10,10);
        ctx.fillRect(x, y, 20, 20);
    }
    else {
        console.error('error');
    }
};

document.addEventListener("DOMContentLoaded", function() {
    /*canvas.width = 800;
    canvas.height = 600;*/
    //draw();

    document.addEventListener("keyup", function(e) {
        if (e.keyCode === 37 || e.keyCode === 65){
            //x -= 1;
            left = false;
        }
        else if (e.keyCode === 39 || e.keyCode === 68) {
            x += 1;
            right = false;
        }
        else if (e.keyCode === 38 || e.keyCode === 87) {
            //y += 1;
            up = false;
        }
        else if (e.keyCode === 40 || e.keyCode === 83) {
            //y -= 1;
            down = false;
        }
    });

    document.addEventListener("keydown", function(e){
        if (e.keyCode === 37 || e.keyCode === 65){
            left = true;
        }
        else if (e.keyCode === 39 || e.keyCode === 68) {
            right = true;
        }
        else if (e.keyCode === 38 || e.keyCode === 87) {
            up = true;
        }
        else if (e.keyCode === 40 || e.keyCode === 83) {
            down = true;
        }
    });

    setInterval(gameLoop, 1000 / 60);
});

function gameLoop() {
    if (left) {
        x -= speed;
        if (x <= 0) {
            x = 0;
        }
    }
    if (right) {
        x += speed;
    }
    if (up) {
        y -= speed;
    }
    if (down) {
        y += speed;
    }
    draw();

    healthBox.innerHTML = health.toString() + '/' + maxHealth.toString();
    levelBox.innerHTML = level.toString();
    expBox.innerHTML = exp.toString() + '/' + levelExp.toString();
}
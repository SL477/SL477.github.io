const canvas = document.getElementById('canvas');
const healthBox = document.getElementById('health');
const levelBox = document.getElementById('level');
const expBox = document.getElementById('exp');

const xBox = document.getElementById('x');
const yBox = document.getElementById('y');
const mapYBox = document.getElementById('mapY');
const curCellBox = document.getElementById('curCell');

let width = 800;
let height = 600;

let x = (width + 10) / 2;
let y = (height + 10) / 2;
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

const cellWidth = 30;

//let mapY = 8 * 40;


let map = [
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1]
];

let maxMapY = map.length * cellWidth;
let mapY = maxMapY - (7.5 * cellWidth);//7.5 * cellWidth;
//let mapY = 7.5 * cellWidth;

const draw = (reducedMap) => {
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

        //Draw the map
        ctx.fillStyle = "brown";
        reducedMap.map((m,i) => {
            m.map((block, blockIndex) => {
                if (block === 1) {
                    //ctx.fillRect(blockIndex * cellWidth, (height - cellWidth) - (i * cellWidth), cellWidth,cellWidth);
                    ctx.fillRect(blockIndex * cellWidth, i * cellWidth, cellWidth,cellWidth);
                    //console.log('blockIndex', blockIndex, 'i',i);
                }
            });
        });

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
    console.log('maxMapY',maxMapY);
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
        if (x >= width) {
            x = width - 20;
        }
    }
    if (up) {
        /*mapY -= speed;
        if (mapY <= 0) {
            mapY = 0;
        }*/
        mapY += speed;
        if (mapY >= maxMapY) {
            mapY = maxMapY;
        }
    }
    if (down) {
        /*mapY += speed;
        if (mapY >= maxMapY) {
            mapY = maxMapY;
        }*/
        mapY -= speed;
        if (mapY <= 0) {
            mapY = 0;
        }
    }

    //Starts with showing the bottom fifteen cells
    //need the 7.5 cells above and the 7.5 cells below the current position
    //console.log('map stuff', mapY / cellWidth);
    let curCell = mapY / cellWidth;
    //console.log('Map stuff', map.filter((m,i) => {
        /*if (curCell < 15 && i <= 15) {
            return true;
        }
        else if (map.length - curCell < 15 && i >= map.length - 15) {
            return true
        }
        else {
            return false;
        }*/
     //   return (curCell < 15 && i < 15);
    //}));

    /*if (curCell <= 7.5) {
        y = mapY;
    }*/
    /*if ((maxMapY / cellWidth) - curCell <= 7.5) {
        y = maxMapY - mapY;
    }*/
    //console.log('curCell',curCell);
    
    let reducedMap = map.filter((m,i) => {
        //return (curCell < 15 && i < 15) || (curCell > 15 && map.length - curCell < 15 && i >= map.length - 15);
        return (curCell <= 20 && i >= map.length - 20) || (curCell >= map.length - 20 && i < 20) || (curCell > 20 && curCell < map.length - 20 && i > Math.floor(curCell) - 10 && i < Math.floor(curCell) + 10);
    });
    console.log('reducedMap', reducedMap);
    draw(reducedMap);

    healthBox.innerHTML = health.toString() + '/' + maxHealth.toString();
    levelBox.innerHTML = level.toString();
    expBox.innerHTML = exp.toString() + '/' + levelExp.toString();

    xBox.innerHTML = x.toString();
    yBox.innerHTML = y.toString();
    mapYBox.innerHTML = mapY.toString();
    curCellBox.innerHTML = curCell.toString();
}
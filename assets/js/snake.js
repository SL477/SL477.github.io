'use strict';
let canv;
let ctx;
window.onload = function() {
    canv = document.getElementById('canvas');
    ctx = canv.getContext('2d');
    document.addEventListener('keydown', keyPush);
    setInterval(game, 1000 / 15);
};

let px = 10;
let py = 10;//position x & y
let gs = 20;
let tc = 20;
let ax = 15;
let ay = 15;//apple
let xv = 0;
let yv = 0;//velocity
let trail = [];
let tail = 5;

function game() {
    px += xv;
    py += yv;
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = 'darkgreen';

    trail.forEach(t => {
        ctx.fillRect(t.x * gs, t.y * gs, gs - 2, gs - 2);
        if (t.x == px && t.y == py) {
            tail = 5;
        }
        ctx.fillStyle = 'lime';
    });

    trail.push({x: px, y: py});
    while (trail.length > tail) {
        trail.shift();
    }
    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }

    ctx.fillStyle = 'red';
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

function keyPush(evt) {
    //console.log('keycode', evt.keyCode);
    let keyCode = evt.keyCode;
    if (keyCode == 37 || keyCode == 65) {
        xv = -1;
        yv = 0;
    }
    else if (keyCode == 38 || keyCode == 87) {
        xv = 0;
        yv = -1;
    }
    else if (keyCode == 39 || keyCode == 68) {
        xv = 1;
        yv = 0;
    }
    else if (keyCode == 40 || keyCode == 83) {
        xv = 0;
        yv = 1;
    }
}
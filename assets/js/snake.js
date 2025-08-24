'use strict';
let canv;
let ctx;
window.onload = function () {
  canv = document.getElementById('canvas');
  ctx = canv.getContext('2d');
  document.addEventListener('keydown', keyPush);
  document.addEventListener('mousedown', mouseClick);
  setInterval(game, 1000 / 15);
};

let px = 10;
let py = 10; //position x & y
let gs = 15;
let tc = 20;
let ax = 15;
let ay = 15; //apple
let xv = 0;
let yv = 0; //velocity
let trail = [];
let tail = 5;
let xy = 0;

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

  trail.forEach((t) => {
    ctx.fillRect(t.x * gs, t.y * gs, gs - 2, gs - 2);
    if (t.x == px && t.y == py) {
      tail = 5;
    }
    ctx.fillStyle = 'lime';
  });

  trail.push({ x: px, y: py });
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
  const keyCode = evt.keyCode;
  if ((keyCode == 37 || keyCode == 65) && xv != 1) {
    xv = -1;
    yv = 0;
  } else if ((keyCode == 38 || keyCode == 87) && yv != 1) {
    xv = 0;
    yv = -1;
  } else if ((keyCode == 39 || keyCode == 68) && xv != -1) {
    xv = 1;
    yv = 0;
  } else if ((keyCode == 40 || keyCode == 83) && yv != -1) {
    xv = 0;
    yv = 1;
  }
}

/**
 * Mouse control
 * @param {MouseEvent} evt
 */
function mouseClick(evt) {
  const rect = canv.getBoundingClientRect();
  //   console.log(
  //     'mouse',
  //     (evt.clientX - rect.left) / gs,
  //     (evt.clientY - rect.top) / gs,
  //     px,
  //     py
  //   );
  const mouseXPos = (evt.clientX - rect.left) / gs;
  const mouseYPos = (evt.clientY - rect.top) / gs;
  const deltaXPos = mouseXPos - px;
  const deltaYPos = mouseYPos - py;
  if ((Math.abs(deltaXPos) > Math.abs(deltaYPos))) {
    // moving in x
    if (deltaXPos >= 0) {
      if (xv === -1) {
        xv = 0;
        yv = deltaYPos >= 0? 1 : -1;
      }
      else {
        xv = 1;
        yv = 0;
      }
    } else {
      if (xv === 1) {
        xv = 0;
        yv = deltaYPos >= 0? 1 : -1;
      }
      else {
        xv = -1;
        yv = 0;
      }
    }
  } else {
    // moving in y
    if (deltaYPos >= 0) {
      if (yv === -1) {
        xv = deltaXPos >= 0? 1 : -1;
        yv = 0;
      }
      else {
        xv = 0;
        yv = 1;
      }
    } else {
      if (yv === 1) {
        xv = deltaXPos >= 0? 1 : -1;
        yv = 0;
      }
      else {
        xv = 0;
        yv = -1;
      }
    }
  }
}

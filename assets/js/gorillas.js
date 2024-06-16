// The state of the game
const state = {};

// TODO
/*
Add moon to background
Animate gorilla hand
Destructible buildings
Play against computer
*/

//References to HTML elements
const canvas = document.getElementById('game');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.9;
const ctx = canvas.getContext('2d');

// Left info panel
const angle1DOM = document.querySelector('#info-left .angle');
const velocity1DOM = document.querySelector('#info-left .velocity');

// Right info panel
const angle2DOM = document.querySelector('#info-right .angle');
const velocity2DOM = document.querySelector('#info-right .velocity');

const bombGrabAreaDOM = document.getElementById('bomb-grab-area');
const congratulationsDOM = document.getElementById('congratulations');
const winnerDOM = document.getElementById('winner');
const newGameBtnDOM = document.getElementById('new-game');

let isDragging = false;
let dragStartX = undefined;
let dragStartY = undefined;

let previousAnimationTimestamp = undefined;

// ctx.fillStyle = '#58A8D8';
// ctx.strokeStyle = '#58A8D8';
// ctx.lineWidth = 30;
// ctx.fillRect(200, 200, 440, 320);
// ctx.beginPath();
// ctx.moveTo(200, 200);
// ctx.lineTo(500, 350);
// ctx.lineTo(200, 500);
// ctx.moveTo(200, 300);
// ctx.quadraticCurveTo(500, 400, 800, 300);
// ctx.stroke();

const phases = {
  aiming: 'aiming',
  inFlight: 'in flight',
  celebrating: 'celebrating',
};

newGame();

function newGame() {
  // Initialise game state
  state.phase = phases.aiming;
  state.currentPlayer = 1;
  state.bomb = {
    x: undefined,
    y: undefined,
    velocity: { x: 0, y: 0 },
  };
  state.buildings = generateBuildings();
  state.scale = 1;

  calculateScale();

  initialiseBombPosition();

  // Reset HTML elements
  congratulationsDOM.style.visibility = 'hidden';
  angle1DOM.innerText = 0;
  angle2DOM.innerText = 0;
  velocity1DOM.innerText = 0;
  velocity2DOM.innerText = 0;

  draw();
}

function draw() {
  ctx.save();
  // Flip coordinate system upside down
  ctx.translate(0, window.innerHeight * 0.9);
  ctx.scale(1, -1);
  ctx.scale(state.scale, state.scale);

  // Draw scene
  drawBackground();
  drawBuildings();
  drawGorilla(1);
  drawGorilla(2);
  drawBomb();

  // Restore transformation
  ctx.restore();
}

function drawBackground() {
  ctx.fillStyle = '#58A8D8';
  ctx.fillRect(
    0,
    0,
    window.innerWidth / state.scale,
    (window.innerHeight * 0.9) / state.scale
  );
  // todo draw a moon
}

function drawBuildings() {
  state.buildings.forEach((building) => {
    ctx.fillStyle = '#152A47';
    ctx.fillRect(building.x, 0, building.width, building.height);
  });
}

/**
 * @param {number} player
 */
function drawGorilla(player) {
  ctx.save();
  const building =
    player === 1
      ? state.buildings.at(1) // Second building
      : state.buildings.at(-2); // second last building

  ctx.translate(building.x + building.width / 2, building.height);

  drawGorillaBody();
  drawGorillaLeftArm(player);
  drawGorillaRightArm(player);
  drawGorillaFace();

  ctx.restore();
}

function drawGorillaBody() {
  ctx.fillStyle = 'black';

  ctx.beginPath();

  // Starting Position
  ctx.moveTo(0, 15);

  // Left Leg
  ctx.lineTo(-7, 0);
  ctx.lineTo(-20, 0);

  // Main Body
  ctx.lineTo(-13, 77);
  ctx.lineTo(0, 84);
  ctx.lineTo(13, 77);

  // Right leg
  ctx.lineTo(20, 0);
  ctx.lineTo(7, 0);

  ctx.fill();
}

/**
 * @param {number} player
 */
function drawGorillaLeftArm(player) {
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 18;

  ctx.beginPath();
  ctx.moveTo(-13, 50);

  if (
    (state.phase === phases.aiming &&
      state.currentPlayer === 1 &&
      player === 1) ||
    (state.phase === phases.celebrating && state.currentPlayer === player)
  ) {
    ctx.quadraticCurveTo(-44, 63, -28, 107);
  } else {
    ctx.quadraticCurveTo(-44, 45, -28, 12);
  }
  ctx.stroke();
}

/**
 * @param {number} player
 */
function drawGorillaRightArm(player) {
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 18;

  ctx.beginPath();
  ctx.moveTo(13, 50);

  if (
    (state.phase === phases.aiming &&
      state.currentPlayer === 2 &&
      player === 2) ||
    (state.phase === phases.celebrating && state.currentPlayer === player)
  ) {
    ctx.quadraticCurveTo(44, 63, 28, 107);
  } else {
    ctx.quadraticCurveTo(44, 45, 28, 12);
  }
  ctx.stroke();
}

function drawGorillaFace() {
  ctx.strokeStyle = 'lightgray';
  ctx.lineWidth = 3;

  ctx.beginPath();

  // Left Eye
  ctx.moveTo(-5, 70);
  ctx.lineTo(-2, 70);

  // Right Eye
  ctx.moveTo(2, 70);
  ctx.lineTo(5, 70);

  // Mouth
  ctx.moveTo(-5, 62);
  ctx.lineTo(5, 62);

  ctx.stroke();
}

function drawBomb() {
  // Draw throwing trajectory
  if (state.phase === phases.aiming) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.setLineDash([3, 8]);
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(state.bomb.x, state.bomb.y);
    ctx.lineTo(
      state.bomb.x + state.bomb.velocity.x,
      state.bomb.y + state.bomb.velocity.y
    );
    ctx.stroke();
  }

  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc(state.bomb.x, state.bomb.y, 6, 0, 2 * Math.PI);
  ctx.fill();
}

/** Create random buildings. Try to make it so that the Gorillas cannot directly see each other */
function generateBuildings() {
  const buildings = [];
  const minWidth = 80;
  const maxWidth = 130;
  const minHeight = 40;
  const maxHeight = 300;
  const minHeightGorilla = 30;
  const maxHeightGorilla = 150;

  for (let index = 0; index < 8; index++) {
    const previousBuilding = buildings[index - 1];

    const x = previousBuilding
      ? previousBuilding.x + previousBuilding.width + 4
      : 0;

    const width = minWidth + Math.random() * (maxWidth - minWidth);

    const platformWithGorilla = index === 1 || index === 6;

    const height = platformWithGorilla
      ? minHeightGorilla + Math.random() * (maxHeightGorilla - minHeightGorilla)
      : minHeight + Math.random() * (maxHeight - minHeight);

    buildings.push({ x, width, height });
  }
  return buildings;
}

function initialiseBombPosition() {
  const building =
    state.currentPlayer === 1 ? state.buildings.at(1) : state.buildings.at(-2);

  const gorillaX = building.x + building.width / 2;
  const gorillaY = building.height;

  const gorillaHandOffsetX = state.currentPlayer === 1 ? -28 : 28;
  const gorillaHandOffsetY = 107;

  state.bomb.x = gorillaX + gorillaHandOffsetX;
  state.bomb.y = gorillaY + gorillaHandOffsetY;
  state.bomb.velocity.x = 0;
  state.bomb.velocity.y = 0;

  // initialise the position of the grab area in HTML
  const grabAreaRadius = 15;
  const left = state.bomb.x * state.scale - grabAreaRadius;
  const bottom = state.bomb.y * state.scale - grabAreaRadius - 110;
  bombGrabAreaDOM.style.left = `${left}px`;
  bombGrabAreaDOM.style.bottom = `${bottom}px`;
}

function calculateScale() {
  const lastBuilding = state.buildings.at(-1);
  const totalWidthOfTheCity = lastBuilding.x + lastBuilding.width;

  state.scale = window.innerWidth / totalWidthOfTheCity;
}

// Event handlers
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.9;
  calculateScale();
  initialiseBombPosition();
  draw();
});

bombGrabAreaDOM.addEventListener('mousedown', function (e) {
  if (state.phase === phases.aiming) {
    isDragging = true;

    dragStartX = e.clientX;
    dragStartY = e.clientY;

    document.body.style.cursor = 'grabbing';
  }
});

window.addEventListener('mousemove', function (e) {
  if (isDragging) {
    const deltaX = e.clientX - dragStartX;
    const deltaY = e.clientY - dragStartY;

    state.bomb.velocity.x = -deltaX;
    state.bomb.velocity.y = deltaY;
    setInfo(deltaX, deltaY);
    draw();
  }
});

window.addEventListener('mouseup', function () {
  if (isDragging) {
    isDragging = false;
    document.body.style.cursor = 'default';

    throwBomb();
  }
});

newGameBtnDOM.addEventListener('click', newGame);

function throwBomb() {
  state.phase = phases.inFlight;
  previousAnimationTimestamp = undefined;
  requestAnimationFrame(animate);
}

/**
 * @param {number} timestamp
 */
function animate(timestamp) {
  if (previousAnimationTimestamp === undefined) {
    previousAnimationTimestamp = timestamp;
    requestAnimationFrame(animate);
    return;
  }
  const elapsedTime = timestamp - previousAnimationTimestamp;

  const hitDetectionPrecision = 10;
  for (let i = 0; i < hitDetectionPrecision; i++) {
    moveBomb(elapsedTime / hitDetectionPrecision);

    // Hit Detection
    const miss = checkFrameHit() || checkBuildingHit();
    const hit = checkGorillaHit();

    // Handle when we hit a building or bomb got off-screen
    if (miss) {
      state.currentPlayer = state.currentPlayer === 1 ? 2 : 1;
      state.phase = phases.aiming;
      initialiseBombPosition();
      draw();
      return;
    }
    // Handle hitting enemy
    if (hit) {
      state.phase = phases.celebrating;
      announceWinner();
      draw();
      return;
    }
  }

  draw();

  // continue loop
  previousAnimationTimestamp = timestamp;
  requestAnimationFrame(animate);
}

/**
 * @param {number} elapsedTime
 */
function moveBomb(elapsedTime) {
  const multiplier = elapsedTime / 200; // adjust trajectory by gravity
  state.bomb.velocity.y -= 20 * multiplier; // calculate new position

  state.bomb.x += state.bomb.velocity.x * multiplier;
  state.bomb.y += state.bomb.velocity.y * multiplier;
}

/**
 * Check if the bomb went off the left, right or bottom
 * @returns {boolean}
 */
function checkFrameHit() {
  return (
    state.bomb.y < 0 ||
    state.bomb.x < 0 ||
    state.bomb.x > window.innerWidth / state.scale
  );
}

function checkBuildingHit() {
  for (let i = 0; i < state.buildings.length; i++) {
    const building = state.buildings[i];
    if (
      state.bomb.x + 4 > building.x &&
      state.bomb.x - 4 < building.x + building.width &&
      state.bomb.y - 4 < 0 + building.height
    ) {
      return true;
    }
  }
}

function checkGorillaHit() {
  const enemyPlayer = state.currentPlayer === 1 ? 2 : 1;
  const enemyBuilding =
    enemyPlayer === 1 ? state.buildings.at(1) : state.buildings.at(-2);

  ctx.save();

  ctx.translate(
    enemyBuilding.x + enemyBuilding.width / 2,
    enemyBuilding.height
  );

  drawGorillaBody();
  let hit = ctx.isPointInPath(state.bomb.x, state.bomb.y);

  drawGorillaLeftArm(enemyPlayer);
  hit ||= ctx.isPointInStroke(state.bomb.x, state.bomb.y);

  drawGorillaRightArm(enemyPlayer);
  hit ||= ctx.isPointInStroke(state.bomb.x, state.bomb.y);

  ctx.restore();
  return hit;
}

/**
 * @param {number} deltaX
 * @param {number} deltaY
 */
function setInfo(deltaX, deltaY) {
  const hypotenuse = Math.sqrt(deltaX ** 2 + deltaY ** 2);
  const angleInRadians = Math.asin(deltaY / hypotenuse);
  const angleInDegrees = (angleInRadians / Math.PI) * 180;

  if (state.currentPlayer === 1) {
    angle1DOM.innerText = Math.round(angleInDegrees);
    velocity1DOM.innerText = Math.round(hypotenuse);
  } else {
    angle2DOM.innerText = Math.round(angleInDegrees);
    velocity2DOM.innerText = Math.round(hypotenuse);
  }
}

function announceWinner() {
  winnerDOM.innerText = `Player ${state.currentPlayer}`;
  congratulationsDOM.style.visibility = 'visible';
}

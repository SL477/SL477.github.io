/**
 * @returns {number}
 */
function getDistance() {
  const distkmTxt = document.getElementById('distkm');
  if (distkmTxt && distkmTxt.value) {
    return parseFloat(distkmTxt.value);
  }
  return 0;
}

/**
 * @param {number} newDistance
 */
function setDistance(newDistance) {
  const distkmTxt = document.getElementById('distkm');
  if (distkmTxt) {
    distkmTxt.value = newDistance;
  }
  const distanceSpn = document.getElementById('distanceSpn');
  if (distanceSpn) {
    distanceSpn.textContent = newDistance.toLocaleString();
  }
}

/**
 * @returns {number}
 */
function getAcceleration() {
  const accelerationTxt = document.getElementById('acceleration');
  if (accelerationTxt && accelerationTxt.value) {
    return parseFloat(accelerationTxt.value);
  }
  return 0;
}

/**
 * @returns {number}
 */
function getHours() {
  const hoursTxt = document.getElementById('hours');
  if (hoursTxt && hoursTxt.value) {
    return parseFloat(hoursTxt.value);
  }
  return 0;
}

/**
 * @param {number} newHours
 */
function setHours(newHours) {
  const hoursTxt = document.getElementById('hours');
  if (hoursTxt) {
    hoursTxt.value = newHours;
  }
  const hoursSpn = document.getElementById('hoursSpn');
  if (hoursSpn) {
    hoursSpn.textContent = newHours.toLocaleString();
  }
}

function calcTime() {
  setHours((Math.sqrt((2 * getDistance() * 1000) / getAcceleration())) / 60 / 60);
}

function calcDistance() {
  setDistance(0.5 * getAcceleration() * Math.pow(getHours() * 60 * 60, 2));
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('calcTime').addEventListener('click', calcTime);
  document.getElementById('calcDistance').addEventListener('click', calcDistance);
});
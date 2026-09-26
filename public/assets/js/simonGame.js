let buttonArray = [];
let currentStep = 1;
let humanStep = 0;
let strict = false;
const correctDiv = document.getElementById('correct');
const currentStepSpn = document.getElementById('currentStep');

/**
 * @param {HTMLInputElement} ev
 */
function setStrict(ev) {
  strict = ev.checked;
}

/**
 * @param {number} newVal
 */
function setCurrentStep(newVal) {
  currentStep = newVal;
  currentStepSpn.textContent = currentStep;
}

function generateButtonArray() {
  setCurrentStep(1);
  humanStep = 0;
  setCorrect(true);
  buttonArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 4));
}

function simonButton(num, human = false) {
  console.log(
    'num',
    num,
    human,
    humanStep,
    currentStep,
    buttonArray[humanStep]
  );
  const aud = document.getElementById('aud' + num);
  const btn = document.getElementById('btn' + num);
  btn.classList.add('active-button');
  aud.play();
  setTimeout(() => btn.classList.remove('active-button'), 500);
  if (human) {
    if (num === buttonArray[humanStep]) {
      console.log('num equals buttonArray');
      setCorrect(true);
      humanStep++;
      if (humanStep === currentStep) {
        if (currentStep === 20) {
          alert('You won!');
          setTimeout(() => reset(), 1000);
        } else {
          currentStep++;
          setCurrentStep(currentStep);
          humanStep = 0;
          setTimeout(() => playSteps(), 1000);
        }
      }
    } else {
      // mistake made
      console.log('mistake made');
      setCorrect(false);
      if (strict) {
        console.log('mistake made strict');
        setTimeout(() => this.reset(), 1000);
      } else {
        console.log('mistake made non-strict');
        humanStep = 0;
        setTimeout(() => this.playSteps(), 1000);
      }
    }
  }
}

function playSteps() {
  for (let i = 0; i < currentStep; i++) {
    setTimeout(() => simonButton(buttonArray[i]), 1000 * i);
  }
}

function reset() {
  setCorrect(true);
  generateButtonArray();
  playSteps();
}

/**
 * @param {boolean} value
 */
function setCorrect(value) {
  correctDiv.className = value ? 'display-none' : 'display-block';
}

document.addEventListener('DOMContentLoaded', () => {
  reset();
  document.getElementById('reset').addEventListener('click', reset);
  document.getElementById('useStrict').addEventListener('change', (e) => setStrict(e.target));
  document.querySelectorAll('.grid-item').forEach(btn =>
    btn.addEventListener('click', () => simonButton(Number(btn.dataset.num), true)));
});
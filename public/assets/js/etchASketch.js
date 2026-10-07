
const sketchpad = document.getElementById('sketchpad');
let gridNum = 16;

function createGrid() {
  if (sketchpad) {
    let html = '';
    for (let i = 0; i < gridNum; i++) {
      html += `<div id="row${i}" class="row">`;
      for (let j = 0; j < gridNum; j++) {
        html += `<div id="coli${i}j${j}" class="col" style="width: ${100 / gridNum}vw; height: ${100 / gridNum}vh;"></div>`
      }
      html += '</div>';
    }
    sketchpad.innerHTML = html;
  }
}

function userCreateGrid() {
  if (sketchpad) {
    gridNum = Number(prompt('Select size of grid (max 100)', gridNum));
    if (gridNum < 1 || gridNum > 100 || !gridNum) {
      gridNum = 16;
    }
    console.log('gridNum', gridNum);
    sketchpad.innerHTML = '';
    createGrid();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createGrid();
  document.getElementById('userCreateGrid').addEventListener('click', userCreateGrid);
  sketchpad.addEventListener('mouseover', e => {
    if (e.target.matches('.col')) {
      e.target.className += ' hovered';
    }
  });
});
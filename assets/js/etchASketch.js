
const sketchpad = document.getElementById('sketchpad');
let gridNum = 16;

const createGrid = () => {
    if (sketchpad) {
        for (let i = 0; i < gridNum; i++) {
            let html = `<div id="row${i}" class="row">`;
            for (let j = 0; j < gridNum; j++) {
                html += `<div id="coli${i}j${j}" class="col" style="width: ${100 / gridNum}vw; height: ${100 / gridNum}vh;"></div>`
            }
            html += '</div>';
            sketchpad.innerHTML += html;
        }
    }

    const cols = document.querySelectorAll('.col');
    if (cols) {
        cols.forEach(element => {
            element.onmouseover = (event) => {
                event.target.className += ' hovered';
            };
        });
    }
};

// eslint-disable-next-line no-unused-vars
const userCreateGrid = () => {
    if (sketchpad) {
        gridNum = Number(prompt('Select size of grid (max 100)', gridNum));
        if (gridNum < 1 || gridNum > 100 || !gridNum) {
            gridNum = 16;
        }
        console.log('gridNum', gridNum);
        sketchpad.innerHTML = '';
        createGrid();
    }
};

createGrid();
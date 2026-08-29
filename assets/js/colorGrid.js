'use strict';

//need a 14 by 14 grid and 6 colours
const GRID_SIZE = 14;
const CELL_SIZE = 20;
const COLOURS = ['White', 'Blue', 'Green', 'Purple', '#e6e600', 'Red'];
const CELL_COUNT = GRID_SIZE * GRID_SIZE;

class Cell {
  constructor(x, y, colour, grouped = false) {
    this.x = x;
    this.y = y;
    this.colour = colour;
    this.grouped = grouped;
  }

  draw(ctx) {
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
  }
}

class Game {
  constructor(canvas, movesEl) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.movesEl = movesEl;
    this.cells = [];
    this.moves = 0;
    this.hasWon = false;

    this.init();
  }

  init() {
    this.generateGrid();
    this.draw();
  }

  generateGrid() {
    this.cells = [];
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const colour = COLOURS[Math.floor(Math.random() * COLOURS.length)];
        this.cells.push(new Cell(x, y, colour, false));
      }
    }
    this.floodFill();
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.cells.forEach(cell => cell.draw(this.ctx));
  }

  changeColour(colourCode) {
    if (this.hasWon) return;

    this.cells.forEach(cell => {
      if (cell.grouped) cell.colour = colourCode;
    });

    this.moves++;
    this.movesEl.textContent = `Number of Moves: ${this.moves}`;
    this.checkWin();
    this.draw();
  }

  checkWin() {
    this.floodFill();
    const groupCount = this.cells.filter(c => c.grouped).length;
    if (groupCount === CELL_COUNT) {
      this.hasWon = true;
      alert('You won!');
    }
  }

  floodFill() {
    // This is a classic breadth‑first search to expand the connected region.
    this.cells.filter(c => c.grouped).forEach(cell => cell.grouped = false);
    const startColour = this.cells[0].colour;
    const queue = [0];
    const visited = new Set();

    while (queue.length) {
      const idx = queue.shift();
      if (visited.has(idx)) continue;
      visited.add(idx);

      const cell = this.cells[idx];
      if (cell.grouped) continue;

      if (cell.colour !== startColour) continue;

      cell.grouped = true;

      // add neighbours (right, left, below, above)
      const x = idx % GRID_SIZE;
      const y = Math.floor(idx / GRID_SIZE);

      if (x < GRID_SIZE - 1) queue.push(idx + 1); // right
      if (x > 0) queue.push(idx - 1); // left
      if (y < GRID_SIZE - 1) queue.push(idx + GRID_SIZE); // below
      if (y > 0) queue.push(idx - GRID_SIZE); // above
    }
  }

  restart() {
    this.moves = 0;
    this.hasWon = false;
    this.movesEl.textContent = 'Number of Moves: 0';
    this.generateGrid();
    this.draw();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('canvas');
  const movesEl = document.getElementById('NumMoves');
  const game = new Game(canvas, movesEl);

  document.querySelectorAll('.controls button').forEach(btn => {
    btn.addEventListener('click', () => game.changeColour(btn.dataset.colour));
  });

  document.getElementById('restart').addEventListener('click', () => game.restart());
});

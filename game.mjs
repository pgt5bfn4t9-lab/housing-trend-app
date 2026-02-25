import {
  createInitialState,
  restart,
  setDirection,
  step,
  togglePause,
} from './snake-logic.mjs';

const GRID_SIZE = 16;
const TICK_MS = 140;

const gridEl = document.getElementById('grid');
const scoreEl = document.getElementById('score');
const statusEl = document.getElementById('status');
const pauseBtn = document.getElementById('pause-btn');
const restartBtn = document.getElementById('restart-btn');
const touchButtons = [...document.querySelectorAll('[data-dir]')];

let state = createInitialState({ gridSize: GRID_SIZE });

gridEl.style.gridTemplateColumns = `repeat(${GRID_SIZE}, 1fr)`;
gridEl.style.gridTemplateRows = `repeat(${GRID_SIZE}, 1fr)`;

function render() {
  scoreEl.textContent = String(state.score);

  if (state.gameOver) {
    statusEl.textContent = 'Game Over';
  } else if (state.paused) {
    statusEl.textContent = 'Paused';
  } else {
    statusEl.textContent = 'Running';
  }

  const snakeSet = new Set(state.snake.map((seg) => `${seg.x},${seg.y}`));
  const foodKey = state.food ? `${state.food.x},${state.food.y}` : '';

  const cells = [];
  for (let y = 0; y < GRID_SIZE; y += 1) {
    for (let x = 0; x < GRID_SIZE; x += 1) {
      const key = `${x},${y}`;
      let className = 'cell';
      let content = '';
      if (snakeSet.has(key)) className += ' snake';
      if (key === foodKey) {
        className += ' food';
        content = '🛹';
      }
      cells.push(`<div class="${className}">${content}</div>`);
    }
  }

  gridEl.innerHTML = cells.join('');
}

function setDir(dir) {
  state = setDirection(state, dir);
  render();
}

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();

  if (key === 'arrowup' || key === 'w') setDir('UP');
  if (key === 'arrowdown' || key === 's') setDir('DOWN');
  if (key === 'arrowleft' || key === 'a') setDir('LEFT');
  if (key === 'arrowright' || key === 'd') setDir('RIGHT');

  if (key === ' ') {
    event.preventDefault();
    state = togglePause(state);
    pauseBtn.textContent = state.paused ? 'Resume' : 'Pause';
    render();
  }

  if (key === 'enter' && state.gameOver) {
    state = restart(state);
    pauseBtn.textContent = 'Pause';
    render();
  }
});

pauseBtn.addEventListener('click', () => {
  state = togglePause(state);
  pauseBtn.textContent = state.paused ? 'Resume' : 'Pause';
  render();
});

restartBtn.addEventListener('click', () => {
  state = restart(state);
  pauseBtn.textContent = 'Pause';
  render();
});

touchButtons.forEach((button) => {
  button.addEventListener('click', () => setDir(button.dataset.dir));
});

setInterval(() => {
  state = step(state);
  render();
}, TICK_MS);

render();

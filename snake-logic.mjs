export const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

const OPPOSITES = {
  UP: 'DOWN',
  DOWN: 'UP',
  LEFT: 'RIGHT',
  RIGHT: 'LEFT',
};

function positionKey(pos) {
  return `${pos.x},${pos.y}`;
}

function samePosition(a, b) {
  return a.x === b.x && a.y === b.y;
}

export function spawnFood(snake, gridSize, rng = Math.random) {
  const taken = new Set(snake.map(positionKey));
  const open = [];

  for (let y = 0; y < gridSize; y += 1) {
    for (let x = 0; x < gridSize; x += 1) {
      const pos = { x, y };
      if (!taken.has(positionKey(pos))) {
        open.push(pos);
      }
    }
  }

  if (open.length === 0) {
    return null;
  }

  const index = Math.floor(rng() * open.length);
  return open[index];
}

export function createInitialState(options = {}) {
  const gridSize = options.gridSize ?? 16;
  const mid = Math.floor(gridSize / 2);
  const snake = [
    { x: mid, y: mid },
    { x: mid - 1, y: mid },
    { x: mid - 2, y: mid },
  ];

  return {
    gridSize,
    snake,
    direction: 'RIGHT',
    food: spawnFood(snake, gridSize, options.rng),
    score: 0,
    gameOver: false,
    paused: false,
  };
}

export function setDirection(state, nextDirection) {
  if (!DIRECTIONS[nextDirection]) {
    return state;
  }

  if (OPPOSITES[state.direction] === nextDirection) {
    return state;
  }

  return { ...state, direction: nextDirection };
}

export function togglePause(state) {
  if (state.gameOver) {
    return state;
  }
  return { ...state, paused: !state.paused };
}

export function restart(state, rng = Math.random) {
  return createInitialState({ gridSize: state.gridSize, rng });
}

export function step(state, rng = Math.random) {
  if (state.gameOver || state.paused) {
    return state;
  }

  const delta = DIRECTIONS[state.direction];
  const head = state.snake[0];
  const newHead = { x: head.x + delta.x, y: head.y + delta.y };

  const outOfBounds =
    newHead.x < 0 ||
    newHead.y < 0 ||
    newHead.x >= state.gridSize ||
    newHead.y >= state.gridSize;

  if (outOfBounds) {
    return { ...state, gameOver: true };
  }

  const ateFood = state.food && samePosition(newHead, state.food);
  const nextSnake = [newHead, ...state.snake];

  if (!ateFood) {
    nextSnake.pop();
  }

  const selfHit = nextSnake
    .slice(1)
    .some((segment) => samePosition(segment, newHead));

  if (selfHit) {
    return { ...state, snake: nextSnake, gameOver: true };
  }

  const nextScore = ateFood ? state.score + 1 : state.score;
  const nextFood = ateFood ? spawnFood(nextSnake, state.gridSize, rng) : state.food;

  return {
    ...state,
    snake: nextSnake,
    food: nextFood,
    score: nextScore,
  };
}

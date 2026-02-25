import test from 'node:test';
import assert from 'node:assert/strict';

import {
  createInitialState,
  setDirection,
  spawnFood,
  step,
} from './snake-logic.mjs';

test('moves one cell in current direction', () => {
  const initial = createInitialState({ gridSize: 10, rng: () => 0 });
  const next = step(initial, () => 0);

  assert.equal(next.snake[0].x, initial.snake[0].x + 1);
  assert.equal(next.snake[0].y, initial.snake[0].y);
  assert.equal(next.snake.length, initial.snake.length);
});

test('prevents direct reverse direction', () => {
  const initial = createInitialState({ gridSize: 10, rng: () => 0 });
  const next = setDirection(initial, 'LEFT');

  assert.equal(next.direction, 'RIGHT');
});

test('eating food increases score and grows snake', () => {
  const initial = {
    gridSize: 8,
    snake: [
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 1, y: 3 },
    ],
    direction: 'RIGHT',
    food: { x: 4, y: 3 },
    score: 0,
    gameOver: false,
    paused: false,
  };

  const next = step(initial, () => 0);

  assert.equal(next.score, 1);
  assert.equal(next.snake.length, 4);
  assert.deepEqual(next.snake[0], { x: 4, y: 3 });
});

test('wall collision triggers game over', () => {
  const initial = {
    gridSize: 4,
    snake: [
      { x: 3, y: 1 },
      { x: 2, y: 1 },
      { x: 1, y: 1 },
    ],
    direction: 'RIGHT',
    food: { x: 0, y: 0 },
    score: 0,
    gameOver: false,
    paused: false,
  };

  const next = step(initial, () => 0);
  assert.equal(next.gameOver, true);
});

test('self collision triggers game over', () => {
  const initial = {
    gridSize: 6,
    snake: [
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 2, y: 3 },
      { x: 1, y: 3 },
      { x: 1, y: 2 },
    ],
    direction: 'RIGHT',
    food: { x: 0, y: 0 },
    score: 0,
    gameOver: false,
    paused: false,
  };

  const next = step(initial, () => 0);
  assert.equal(next.gameOver, true);
});

test('food spawn avoids snake and uses deterministic rng', () => {
  const snake = [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ];

  const food = spawnFood(snake, 2, () => 0);
  assert.deepEqual(food, { x: 0, y: 1 });
});

import React from 'react';
import gameOver from './gameOver';
import emtyBoxs from './emtyBoxs';

const handlePress = (
  i,
  k,
  bombsContainer,
  setBombsContainer,
  setIsGameOver
) => {
  let bombMatris = Array.from(bombsContainer);
  if (bombMatris.find(item => item.id === `X:${i},Y:${k}`).isBombHere) {
    bombMatris = gameOver(bombMatris, setIsGameOver);
  } else {
    if (
      bombMatris.find(item => item.id === `X:${i},Y:${k}`).numberAroundBombs ===
      0
    ) {
      bombMatris.find(item => item.id === `X:${i},Y:${k}`).isPressed = true;
      bombMatris = emtyBoxs(bombMatris, i, k);
    } else {
      bombMatris.find(item => item.id === `X:${i},Y:${k}`).isPressed = true;
    }
  }
  setBombsContainer(bombMatris);
};
export default handlePress;

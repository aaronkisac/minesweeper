import React from 'react';
import randomDeliverBomb from './randomDeliverBomb';

const start = (
  number,
  setBombsContainer,
  setIsGameOver
) => {
  setIsGameOver(false);
  let bombList = [];


  for (let i = 0; i < number; i++) {
    for (let k = 0; k < number; k++) {
      bombList.push({
        id: `X:${i},Y:${k}`,
        isBombHere: false,
        numberAroundBombs: 0,
        isPressed: false,
        boxImage: 10
      });
    }
  }
  setBombsContainer(randomDeliverBomb(number, bombList));
};
export default start;

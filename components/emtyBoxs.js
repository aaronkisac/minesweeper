import React from 'react';

const emtyBoxs = (bombMatris, i, k) => {
  if (
    bombMatris.find(item => item.id === `X:${i - 1},Y:${k - 1}`) &&
    !bombMatris.find(item => item.id === `X:${i - 1},Y:${k - 1}`).isPressed
  ) {
    bombMatris.find(
      item => item.id === `X:${i - 1},Y:${k - 1}`
    ).isPressed = true;
    bombMatris.find(item => item.id === `X:${i - 1},Y:${k - 1}`)
      .numberAroundBombs === 0 && emtyBoxs(bombMatris, i - 1, k - 1);
  }
  if (
    bombMatris.find(item => item.id === `X:${i - 1},Y:${k}`) &&
    !bombMatris.find(item => item.id === `X:${i - 1},Y:${k}`).isPressed
  ) {
    bombMatris.find(item => item.id === `X:${i - 1},Y:${k}`).isPressed = true;
    bombMatris.find(item => item.id === `X:${i - 1},Y:${k}`)
      .numberAroundBombs === 0 && emtyBoxs(bombMatris, i - 1, k);
  }

  if (
    bombMatris.find(item => item.id === `X:${i - 1},Y:${k + 1}`) &&
    !bombMatris.find(item => item.id === `X:${i - 1},Y:${k + 1}`).isPressed
  ) {
    bombMatris.find(
      item => item.id === `X:${i - 1},Y:${k + 1}`
    ).isPressed = true;
    bombMatris.find(item => item.id === `X:${i - 1},Y:${k + 1}`)
      .numberAroundBombs === 0 && emtyBoxs(bombMatris, i - 1, k + 1);
  }
  if (
    bombMatris.find(item => item.id === `X:${i},Y:${k - 1}`) &&
    !bombMatris.find(item => item.id === `X:${i},Y:${k - 1}`).isPressed
  ) {
    bombMatris.find(item => item.id === `X:${i},Y:${k - 1}`).isPressed = true;
    bombMatris.find(item => item.id === `X:${i},Y:${k - 1}`)
      .numberAroundBombs === 0 && emtyBoxs(bombMatris, i, k - 1);
  }

  if (
    bombMatris.find(item => item.id === `X:${i},Y:${k + 1}`) &&
    !bombMatris.find(item => item.id === `X:${i},Y:${k + 1}`).isPressed
  ) {
    bombMatris.find(item => item.id === `X:${i},Y:${k + 1}`).isPressed = true;
    bombMatris.find(item => item.id === `X:${i},Y:${k + 1}`)
      .numberAroundBombs === 0 && emtyBoxs(bombMatris, i, k + 1);
  }
  if (
    bombMatris.find(item => item.id === `X:${i + 1},Y:${k - 1}`) &&
    !bombMatris.find(item => item.id === `X:${i + 1},Y:${k - 1}`).isPressed
  ) {
    bombMatris.find(
      item => item.id === `X:${i + 1},Y:${k - 1}`
    ).isPressed = true;
    bombMatris.find(item => item.id === `X:${i + 1},Y:${k - 1}`)
      .numberAroundBombs === 0 && emtyBoxs(bombMatris, i + 1, k - 1);
  }
  if (
    bombMatris.find(item => item.id === `X:${i + 1},Y:${k}`) &&
    !bombMatris.find(item => item.id === `X:${i + 1},Y:${k}`).isPressed
  ) {
    bombMatris.find(item => item.id === `X:${i + 1},Y:${k}`).isPressed = true;
    bombMatris.find(item => item.id === `X:${i + 1},Y:${k}`)
      .numberAroundBombs === 0 && emtyBoxs(bombMatris, i + 1, k);
  }
  if (
    bombMatris.find(item => item.id === `X:${i + 1},Y:${k + 1}`) &&
    !bombMatris.find(item => item.id === `X:${i + 1},Y:${k + 1}`).isPressed
  ) {
    bombMatris.find(
      item => item.id === `X:${i + 1},Y:${k + 1}`
    ).isPressed = true;
    bombMatris.find(item => item.id === `X:${i + 1},Y:${k + 1}`)
      .numberAroundBombs === 0 && emtyBoxs(bombMatris, i + 1, k + 1);
  }
  return bombMatris;
};

export default emtyBoxs;

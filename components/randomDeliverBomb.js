import React from 'react';

const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const randomDeliverBomb = (number, bombList) => {
  let maxWidth = Math.ceil((number * 4) / 3);
  let X = 0;
  let Y = 0;

  for (let f = 0; f < maxWidth; f++) {
    do {
      X = getRandomInt(number);
      Y = getRandomInt(number);
    } while (bombList.find(item => item.id === `X:${X},Y:${Y}`).isBombHere);
    bombList.find(item => item.id === `X:${X},Y:${Y}`).isBombHere = true;
  }

  bombList.forEach((element, index) => {
    let count = 0;
    if (element.isBombHere === false) {
      if (
        index % number !== 0 &&
        index - number - 1 >= 0 &&
        bombList[index - number - 1].isBombHere === true
      ) {
        count++;
      }
      if (index - number >= 0 && bombList[index - number].isBombHere === true) {
        count++;
      }
      if (
        index % number !== number - 1 &&
        index - number + 1 >= 0 &&
        bombList[index - number + 1].isBombHere === true
      ) {
        count++;
      }
      if (
        index % number !== 0 &&
        index - 1 >= 0 &&
        bombList[index - 1].isBombHere === true
      ) {
        count++;
      }

      if (
        index % number !== number - 1 &&
        index + 1 < bombList.length &&
        bombList[index + 1].isBombHere === true
      ) {
        count++;
      }
      if (
        index % number !== 0 &&
        index + number - 1 < bombList.length &&
        bombList[index + number - 1].isBombHere === true
      ) {
        count++;
      }
      if (
        index + number < bombList.length &&
        bombList[index + number].isBombHere === true
      ) {
        count++;
      }
      if (
        index % number !== number - 1 &&
        index + number + 1 < bombList.length &&
        bombList[index + number + 1].isBombHere === true
      ) {
        count++;
      }
    }

    element.numberAroundBombs = count;
  });

  return bombList;
};

export default randomDeliverBomb;

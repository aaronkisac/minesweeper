import React from 'react';
// import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
const gameOver = (bombMatris, setIsGameOver) => {
  bombMatris.forEach(item => {
    if (item.isBombHere) {
      item.isPressed = true;
      setIsGameOver(true);
    }
  });
  return bombMatris;
};
export default gameOver;

// bombList.push({
//           id: `X:${i},Y:${k}`,
//           isBombHere: false,
//           numberAroundBombs: 0,
//           isPressed: false,
//         });

import React, { useState } from 'react';
import { View, Button } from 'react-native';

import start from './components/start';
import handleForContainer from './components/handleForContainer';
import styles from './components/styles';

export default function App() {
  const [bombsContainer, setBombsContainer] = useState([]);
  const [bombsWidth, setBombsWidth] = useState(10);
  const [forContainer, setForContainer] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [imagesContainer, setImagesContainer] = useState([
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/0.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/1.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/2.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/3.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/4.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/5.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/6.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/7.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/8.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/bomb.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/facingDown.png',
    'https://raw.githubusercontent.com/pardahlman/minesweeper/master/Images/flagged.png',
  ]);

  return (
    <View style={styles.body}>
      <Button
        style={styles.button}
        title="Start"
        onPress={() =>
          start(
            bombsWidth,
            setBombsContainer,
            setIsGameOver
          )
        }
      />

      {bombsContainer.length !== 0 ? (
        <View style={styles.table}>
          {handleForContainer(
            bombsContainer,
            bombsWidth,
            setBombsContainer,
            isGameOver,
            setIsGameOver,
            imagesContainer
          )}
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}

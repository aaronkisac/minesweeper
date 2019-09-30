import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import handlePress from "./handlePress";
import styles from "./styles";
const handleForContainer = (
  bombsContainer,
  bombsWidth,
  setBombsContainer,
  isGameOver,
  setIsGameOver,
  imagesContainer
) => {
  var bombMatris = [];
  bombMatris = bombsContainer;
  var containerFor = [];
  const rowBomb = i => {
    var containerForEach = [];

    for (let k = 0; k < bombsWidth; k++) {
      const bombItem = bombsContainer.find(item => item.id === `X:${i},Y:${k}`);
      const countBomb = bombItem.numberAroundBombs;

      const isBomb = bombItem.isBombHere;
      containerForEach.push(
        bombItem.isPressed ? (
          bombItem.isBombHere ? (
            <View key={`a,${i},${k}`} style={styles.box}>
              <Image
                style={{ width: 20, height: 20 }}
                source={{
                  uri: imagesContainer[9]
                }}
              />
            </View>
          ) : countBomb === 0 ? (
            <View key={`b,${i},${k}`} style={styles.box}>
              <Text style={styles.text}>{""}</Text>
            </View>
          ) : (
            <TouchableOpacity
              key={`T,${i},${k}`}
              style={styles.box}
              onPress={() =>
                !isGameOver &&
                handlePress(
                  i,
                  k,
                  bombsContainer,
                  setBombsContainer,
                  setIsGameOver
                )
              }
            >
              <Image
                style={{ width: 28, height: 28 }}
                source={{
                  uri: imagesContainer[bombItem.numberAroundBombs]
                }}
              />
            </TouchableOpacity>
          )
        ) : (
          <TouchableOpacity
            key={`T2,${i},${k}`}
            style={styles.btn}
            onPress={() =>
              !isGameOver &&
              handlePress(
                i,
                k,
                bombsContainer,
                setBombsContainer,
                setIsGameOver
              )
            }
          >
            <Image
              style={{ width: 30, height: 30 }}
              source={{
                uri: imagesContainer[bombItem.boxImage]
              }}
            />
          </TouchableOpacity>
        )
      );
    }
    return containerForEach;
  };

  for (let i = 0; i < bombsWidth; i++) {
    containerFor.push(
      <View key={`g,${i}`} style={styles.row}>
        {rowBomb(i)}
      </View>
    );
  }
  return containerFor;
};
export default handleForContainer;

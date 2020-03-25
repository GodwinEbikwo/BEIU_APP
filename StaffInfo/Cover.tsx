import React, { Component } from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import Constants from "expo-constants";

const { height } = Dimensions.get("window");
const φ = (1 + Math.sqrt(5)) / 2;

const MIN_HEADER_HEIGHT = 64 + Constants.statusBarHeight;
const MAX_HEADER_HEIGHT = height * (1 - 1 / φ);

export const BUTTON_HEIGHT = 48;
export const BUTTON_WIDTH = 200;

const Cover = props => {
  return (
    <Animated.View style={styles.container}>
      <Image style={styles.image} source={props.cover} />
    </Animated.View>
  );
};

export default Cover;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined
  }
});

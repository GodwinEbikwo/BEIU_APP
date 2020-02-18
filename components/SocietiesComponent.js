import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Platform
} from "react-native";
const { width } = Dimensions.get("window");
const fontText = "mont-bold";

const SocietiesComponent = props => {
  return (
    <View
      style={[styles.container, { shadowColor: props.shadow || "#6B778D" }]}
    >
      <View
        style={[styles.content, { backgroundColor: props.code || "#17223B" }]}
      >
        <Image source={props.image} style={styles.image} />
        <Text style={styles.text1}>{props.subtext}</Text>
      </View>
    </View>
  );
};

export default SocietiesComponent;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 30,
    height: 130,
    marginVertical: -5,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    width: "100%",
    height: "80%",
    borderRadius: 3,
    overflow: "hidden",
    backgroundColor: "#F5F5F5"
  },
  text1: {
    fontSize: 25,
    fontWeight: Platform.OS === "ios" ? "400" : "400",
    color: "#fff",
    fontSize: 15,
    marginHorizontal: 10,
    top: 5,
    fontFamily: fontText,
    width: 90
  },
  image: {
    width: 75,
    height: 75,
    position: "absolute",
    resizeMode: "cover",
    left: "55%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    top: 20,
    transform: [{ rotate: "45deg" }]
  }
});

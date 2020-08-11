import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import aniloading from "../../assets/animation/aniloading.json";
import LottieView from "lottie-react-native";

const LoadingScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1c1c1e",
      }}
    >
      <View style={{}}>
        <LottieView
          source={aniloading}
          autoPlay
          style={{ width: 150, height: 150 }}
          resizeMode="cover"
        />
      </View>
      <Text
        style={{
          color: "#1db954",
          textTransform: "uppercase",
          fontFamily: "DM-Bold",
        }}
      >
        Loading...
      </Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Loading from "../assets/animation/Loading.json";
import LottieView from "lottie-react-native";
import firebase from "../components/Firebase";

class LoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? "App" : "Auth");
    });
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a"
        }}
      >
        <View style={{}}>
          <LottieView
            source={Loading}
            autoPlay
            style={{ width: 150, height: 150 }}
            resizeMode="cover"
          />
        </View>
        <Text
          style={{
            color: "#1db954",
            textTransform: "uppercase",
            fontFamily: "mont-bold"
          }}
        >
          Loading...
        </Text>
      </View>
    );
  }
}
export default LoadingScreen;

const styles = StyleSheet.create({});

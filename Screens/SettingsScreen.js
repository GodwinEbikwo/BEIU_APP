import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class SettingsScreen extends Component {
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
        <Text style={{ color: "white" }}> Settings Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
const fontText = "poppins-Light";
class Tags extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 10,
              color: "black",
              fontFamily: fontText
            }}
          >
            {this.props.name}
          </Text>
        </View>
      </View>
    );
  }
}
export default Tags;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  view: {
    padding: 10,
    backgroundColor: "#fe3547",
    borderRadius: 8,
    borderRadius: 2
  }
});

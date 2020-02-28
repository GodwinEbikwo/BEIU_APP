import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Tags = props => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "700", fontSize: 10, color: "#000" }}>
        {props.name}
      </Text>
    </View>
  );
};
export default Tags;

const styles = StyleSheet.create({
  container: {
    minHeight: 30,
    minWidth: 50,
    padding: 9,
    backgroundColor: "#d4d7dd",
    borderColor: "#d4d7dd",
    borderWidth: 1,
    borderRadius: 2,
    marginRight: 5
  }
});

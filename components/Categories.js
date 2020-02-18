import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Category = props => {
  return (
    <View style={[styles.main, { backgroundColor: props.color || "#263859" }]}>
      <View style={styles.cover}>
        <Image
          source={props.imageUri}
          style={{
            flex: 1,
            width: null,
            height: null,
            resizeMode: "contain",
            // left: 40,
            top: 4
          }}
        />
      </View>
      <View style={{ top: 25, bottom: 20 }}>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{
            color: "#f3f4f5",
            fontFamily: "pt-serif",
            fontSize: 14
          }}
        >
          {props.name}
        </Text>
      </View>
    </View>
  );
};
export default Category;

const styles = StyleSheet.create({
  main: {
    height: 100,
    width: 175,
    marginLeft: 20,
    borderRadius: 3
  },
  cover: {
    flex: 2,
    width: "100%"
  }
});

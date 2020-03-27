import React, { Component } from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class SearchBar extends Component {
  // componentWillMount() {
  //   this.startHeaderHeight = 80;
  //   if (Platform.OS == "android") {
  //     this.startHeaderHeight = 100 + StatusBar.currentHeight;
  //   }
  // }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 12,
          backgroundColor: "#2C2C2E",
          marginHorizontal: 15,
          borderRadius: 7,
          marginTop: Platform.OS == "android" ? 30 : null
        }}
      >
        <Ionicons
          name="ios-search"
          size={20}
          color={"grey"}
          style={{ backgroundColor: "transparent", marginRight: 10 }}
        />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Try Nigeria Society"
          placeholderTextColor="grey"
          style={{ flex: 1, fontWeight: "700", backgroundColor: "#2C2C2E" }}
          keyboardAppearance={"dark"}
        />
      </View>
    );
  }
}
export default SearchBar;

const styles = StyleSheet.create({});

import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar
} from "react-native";
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
          padding: 10,
          backgroundColor: "white",
          marginHorizontal: 20,
          shadowOffset: { width: 0, height: 0 },
          shadowColor: "black",
          shadowOpacity: 0.2,
          elevation: 1,
          borderRadius: 3,
          marginTop: Platform.OS == "android" ? 30 : null
        }}
      >
        <Ionicons
          name="ios-search"
          size={20}
          style={{ backgroundColor: "transparent", marginRight: 10 }}
        />
        <TextInput
          underlineColorAndroid="transparent"
          placeholder="Try Nigeria Society"
          placeholderTextColor="grey"
          style={{ flex: 1, fontWeight: "700", backgroundColor: "white" }}
        />
      </View>
    );
  }
}
export default SearchBar;

const styles = StyleSheet.create({});

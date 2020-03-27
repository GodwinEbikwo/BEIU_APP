import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Button
} from "react-native";
import { Text } from "../src/Text";
import Header from "../src/Header";
import { ScrollView } from "../src/ScrollContext";

class Bookmark extends React.Component {
  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#111112" }}>
        <Header title="Bookmark" />

        <ScrollView contentContainerStyle={styles.container}>
          <View
            style={{
              marginHorizontal: 15
            }}
          >
            <Text style={styles.title}>Bookmarks</Text>
            <Text style={styles.subTitle}>
              Here are a list of your saved articles
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom: 50
  },
  title: {
    marginBottom: 5,
    textAlign: "left",
    width: "100%",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    fontFamily: "mont-bold"
  },
  subTitle: {
    textAlign: "left",
    width: "100%",
    fontSize: 18,
    fontWeight: "500",
    color: "grey"
  }
});

import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Text } from "../Text";
import Header from "../Header";
import { ScrollView } from "../ScrollContext";

const Bookmark = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111112" }}>
      <Header title="Bookmark" />

      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            marginHorizontal: 15,
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
};

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom: 50,
  },
  title: {
    marginBottom: 5,
    textAlign: "left",
    width: "100%",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    fontFamily: "mont-bold",
  },
  subTitle: {
    textAlign: "left",
    width: "100%",
    fontSize: 18,
    fontWeight: "500",
    color: "grey",
  },
});

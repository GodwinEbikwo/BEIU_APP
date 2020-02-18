import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const StaffComponent = props => (
  <View style={styles.container}>
    <View style={styles.cover}>
      <Image source={props.image} style={styles.coverImage} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
    <View style={styles.content}>
      <Image source={props.logo} style={styles.logo} />
      <View style={styles.wrapper}>
        <Text style={styles.caption}>{props.caption}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  </View>
);

export default StaffComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5BCBA",
    width: "90%",
    height: 280,
    borderRadius: 14,
    margin: 20
  },
  cover: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    overflow: "hidden"
  },
  content: {
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    height: 80
  },
  logo: {
    width: 44,
    height: 44
  },
  caption: {
    color: "#3c4560",
    fontSize: 20,
    fontWeight: "600"
  },
  subtitle: {
    color: "#b8bece",
    fontWeight: "600",
    fontSize: 15,
    marginTop: 4
  },
  wrapper: {
    marginLeft: 10
  },
  coverImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 50,
    zIndex: -1
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    width: 170
  }
});

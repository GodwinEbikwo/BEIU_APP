import React from "react";
import { StyleSheet, View, Image } from "react-native";

const Photos = props => {
  return (
    <View style={styles.container}>
      <View style={styles.photoView}>
        <Image source={props.image} style={styles.imagePhoto} />
      </View>
    </View>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: { flex: 1 },
  photoView: {
    width: 70,
    height: 70,
    backgroundColor: "red",
    borderRadius: 8,
    marginHorizontal: 10
  },
  imagePhoto: { width: "100%", height: "100%" }
});

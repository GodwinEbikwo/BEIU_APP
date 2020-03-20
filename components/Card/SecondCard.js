import React, { Component } from "react";
import { Text, StyleSheet, View, ImageBackground, Image } from "react-native";
import { BlurView } from "expo-blur";
import { timeDifferenceForDate } from "../Time";

export const SecondCard = props => {
  return (
    <View style={[styles.container, { backgroundColor: "#242426" }]}>
      <ImageBackground source={props.image} style={styles.imageBg}>
        <View style={styles.header}>
          <Text style={[styles.subTitle, { color: "#ddd" }]}>
            {props.subtitle}
          </Text>
          <Text style={[styles.title, { color: "#fff" }]}>{props.title}</Text>
        </View>
        <BlurView intensity={95} style={styles.footerBlur}>
          <Image
            source={props.logo}
            style={{ width: 54, height: 54, borderRadius: 11 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.timeText}>
              Created by {props.author}{" "}
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "pt-serif",
                  fontSize: 12.5
                }}
              >
                {timeDifferenceForDate(props.dateAndTime)}
              </Text>
            </Text>
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

export default SecondCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 20,
    height: 400,
    width: "92%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.4,
    shadowRadius: 10.27,
    elevation: 10
  },
  imageBg: {
    flex: 1,
    zIndex: -1,
    overflow: "hidden",
    borderRadius: 10,
    justifyContent: "space-between"
  },
  lgView: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "33%",
    opacity: 0.5
  },
  header: {
    padding: 20
  },
  subTitle: {
    marginTop: 0,
    marginBottom: 6,
    textTransform: "uppercase",
    fontFamily: "pt-serif"
  },
  title: {
    fontSize: 38,
    width: 250,
    marginTop: 0,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: "mont-bold"
  },
  footerBlur: {
    flexDirection: "row",
    paddingLeft: 20,
    height: 80,
    alignItems: "center"
  },
  footerSubtitleText: {
    fontSize: 13,
    marginBottom: 0,
    fontWeight: "400",
    fontFamily: "pt-serif"
  },
  footerHeaderText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "400",
    fontFamily: "pt-serif"
  },
  timeText: {
    marginLeft: 3,
    marginTop: 7,
    color: "#fff",
    fontWeight: "400",
    fontSize: 15
  }
});

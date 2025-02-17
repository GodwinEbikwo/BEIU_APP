import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProgressiveImage from "../ProgressiveImage";
import { timeDifferenceForDate } from "../Time";

const NewCard = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: "#242426" }]}>
      <View style={styles.imageBg}>
        <ProgressiveImage
          source={props.image}
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
        />
        <TouchableOpacity style={{ position: "absolute", top: 10, right: 12 }}>
          <Ionicons
            name="md-bookmark"
            color="white"
            size={29}
            style={{ backgroundColor: "transparent" }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footerBlur}>
        <Text style={[styles.subTitle, { color: "#AEAEB2" }]}>
          {props.subtitle}
        </Text>
        <Text style={[styles.title, { color: "#fff" }]}>{props.title}</Text>
        <Text style={styles.timeText}>
          Created by {props.author}{" "}
          <Text
            style={{
              color: "#33FF7A",
              fontFamily: REGULAR,
              fontSize: 12.5,
            }}
          >
            {timeDifferenceForDate(props.dateAndTime)}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default NewCard;

const BOLD = "DM-Bold";
const REGULAR = "DM-Regular";

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 15,
    height: 400,
    width: "92%",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10.27,
    elevation: 10,
  },
  imageBg: {
    width: "100%",
    height: 290,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  header: {
    padding: 20,
  },
  subTitle: {
    fontSize: 13,
    left: 3,
    fontFamily: REGULAR,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 20,
    marginTop: 3,
    marginLeft: 3,
    width: 340,
    fontFamily: BOLD,
    // textTransform: "uppercase"
  },
  footerBlur: {
    marginHorizontal: 10,
    marginTop: 9,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  timeText: {
    marginLeft: 3,
    marginTop: 7,
    color: "#AEAEB2",
    fontSize: 12,
    fontFamily: "DM-Medium",
  },
});

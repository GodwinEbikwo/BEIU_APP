import React, { Component } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";

import moment from "moment";

class Moment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      markedDate: moment(new Date()).format("YYYY-MM-DD")
    };
  }

  render() {
    const today = this.state.currentDate;
    const day = moment(today).format("dddd");
    const date = moment(today).format("MMMM D, YYYY");
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.small}>{date}</Text>
          <Text style={styles.day}>{day}</Text>
        </View>
      </View>
    );
  }
}
export default Moment;

const boldText = "mont-bold";
const normalText = "pt-serif";
const textColor = "#fff";
const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: 35,
    marginLeft: 6
  },
  day: {
    fontSize: 30,
    fontWeight: Platform.OS === "ios" ? "700" : "400",
    color: textColor,
    marginLeft: 8,
    fontFamily: boldText
  },
  small: {
    fontSize: 10,
    fontWeight: Platform.OS === "ios" ? "700" : "400",
    color: "#e6f1ff",
    marginLeft: 8,
    textTransform: "uppercase",
    fontFamily: normalText
  }
});

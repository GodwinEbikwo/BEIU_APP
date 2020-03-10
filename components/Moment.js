import React, { Component } from "react";
import { Text, StyleSheet, View, Platform } from "react-native";
import firebase from "../components/Firebase";
import moment from "moment";

class Moment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date(),
      markedDate: moment(new Date()).format("YYYY-MM-DD"),
      email: "",
      displayName: ""
    };
  }

  componentDidMount() {
    const { displayName, email } = firebase.auth().currentUser;
    this.setState({ displayName, email });
  }

  render() {
    const today = this.state.currentDate;
    const day = moment(today).format("dddd");
    const date = moment(today).format("MMMM D, YYYY");
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.small}>{date}</Text>
          <Text style={styles.day}>Welcome {this.state.displayName}</Text>
        </View>
      </View>
    );
  }
}
export default Moment;

const boldText = "mont-bold";
const normalText = "pt-serif";
const textColor = "#fff";
const smallColor = "#eee";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    marginTop: Platform.OS === "ios" ? 10 : 35,
    marginLeft: 4
  },
  day: {
    fontSize: 20,
    fontWeight: Platform.OS === "ios" ? "700" : "400",
    color: textColor,
    marginLeft: 8,
    fontFamily: boldText
  },
  small: {
    fontSize: 10,
    fontWeight: Platform.OS === "ios" ? "700" : "400",
    color: smallColor,
    marginLeft: 8,
    textTransform: "uppercase",
    fontFamily: normalText
  }
});

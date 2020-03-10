import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProgressiveImage from "../components/ProgressiveImage";

import styled from "styled-components";

const Reminders = props => {
  return (
    <View style={[styles.main, { backgroundColor: "#242426" }]}>
      <View style={styles.content}>
        <ProgressiveImage
          source={props.logo}
          style={{ width: 55, height: 55, borderRadius: 9 }}
        />
        <View
          style={{
            marginLeft: 10,
            paddingTop: 5,
            width: "100%"
          }}
        >
          <Text numberOfLines={2} style={styles.title}>
            {props.title}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 5 }}>
              <Ionicons name="md-time" size={18} color="#33FF7A" />
            </View>

            <Text numberOfLines={2} style={styles.subtitle}>
              {props.subtitle}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          this.props.navigation.goBack();
        }}
        style={styles.icon}
      >
        <View style={styles.closeView}>
          <Ionicons name="md-arrow-forward" size={18} color="#48484A" />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default Reminders;
const bold = "mont-bold";
const regular = "pt-serif";

const styles = StyleSheet.create({
  main: {
    marginTop: 5,
    marginHorizontal: 20,
    width: "92%",
    borderRadius: 4
  },
  content: {
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 80
  },
  title: {
    color: "#f5f5f5",
    fontSize: 14,
    fontWeight: "300",
    width: 250,
    position: "relative",
    fontFamily: bold
  },
  subtitle: {
    color: "#b8bece",
    fontSize: 10,
    fontWeight: "400",
    marginTop: 7,
    fontFamily: regular,
    marginHorizontal: 4
  },
  icon: {
    position: "absolute",
    top: 30,
    right: 8
  }
});

const Logo = styled.Image``;

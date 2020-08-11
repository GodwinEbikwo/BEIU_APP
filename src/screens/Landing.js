import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import Button from "../components/Button";
import ViewPager from "@react-native-community/viewpager";
const screen = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";

function handleHelpPress2() {
  WebBrowser.openBrowserAsync("https://beiu.co.uk/");
}

const Caraousel = () => {
  return (
    <ViewPager style={{ flex: 1 }} initialPage={0} showPageIndicator={true}>
      <View style={styles.page} key="1">
        <Text allowFontScaling={true} style={styles.heading}>
          BEI
          <Text style={{ color: "#1db954" }}>U</Text>
        </Text>
        <Text allowFontScaling={true} style={styles.headingTwo}>
          {" "}
          It's you who makes the difference{" "}
        </Text>
        <Text allowFontScaling={true} style={styles.subHeading}>
          Read articles that would be of relevance to your degree and life
        </Text>
        <Text allowFontScaling={true} style={styles.thirdheading}>
          Get access to members of staff contact details and exclusive
          information about buckingham
        </Text>
      </View>
    </ViewPager>
  );
};

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111112" }}>
      <View style={{ flex: 1 }}>
        <Caraousel />
        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate("Login")}
            title="LOGIN"
            color="#1db954"
            radius={3}
            titleColor="#fff"
          />
          <Button
            title="SIGNUP"
            onPress={() => navigation.navigate("SignUp")}
            bColor="#1db954"
            radius={3}
            titleColor="#fff"
          />

          <TouchableOpacity onPress={handleHelpPress2}>
            <View
              style={{
                marginTop: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "#1db954",
                  fontSize: 15,
                  fontFamily: bold,
                }}
              >
                What is BEIU?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Landing;

const bold = "DM-Bold";
const regular = "DM-Regular";

const styles = StyleSheet.create({
  heading: {
    color: "#fff",
    fontSize: 40,
    textAlign: "center",
    fontFamily: bold,
    width: 400,
  },
  headingTwo: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    fontFamily: bold,
    width: 400,
  },
  subHeading: {
    marginTop: 15,
    color: "#AEAEB2",
    fontSize: 18,
    width: 350,
    fontFamily: regular,
    textAlign: "center",
    padding: 5,
  },
  thirdheading: {
    marginTop: 20,
    color: "#AEAEB2",
    fontFamily: regular,
    fontSize: 18,
    width: 350,
    textAlign: "center",
  },
  button: {
    padding: 20,
    marginTop: screen.height / 10,
    justifyContent: "center",
  },
  page: { justifyContent: "center", alignItems: "center" },
});

const GradientButton = () => {
  return (
    <LinearGradient
      colors={["#67B26F", "#4ca2cd"]}
      style={{ padding: 15, alignItems: "center", borderRadius: 5 }}
    >
      <Text
        style={{
          backgroundColor: "transparent",
          fontSize: 15,
          color: "#fff",
        }}
      >
        Sign in with Facebook
      </Text>
    </LinearGradient>
  );
};

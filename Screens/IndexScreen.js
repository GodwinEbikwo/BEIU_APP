import React from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "../components/Button";
const screen = Dimensions.get("window");

const textColor = ["#8cc63e", "#00adef", "#fdb016", "rgb(237, 0, 140)"];

class IndexScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor() {
    super();
    this.state = {
      colorIndex: 0
    };
  }

  // componentDidMount() {
  //   this.timeOut = setInterval(() => {
  //     let currentColourIndex = this.state.colorIndex;
  //     this.setState({ colorIndex: currentColourIndex + 1 });
  //   }, 1500);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timeout);
  // }
  render() {
    let textThatChanges = textColor[this.state.colorIndex % textColor.length];
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#111112" }}>
        <View style={styles.container}>
          <Text allowFontScaling={true} style={styles.heading}>
            BEI
            <Text style={{ color: "#1db954" }}>U</Text>
          </Text>

          <Text allowFontScaling={true} style={styles.heading}>
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

        <View style={styles.button}>
          <Button
            onPress={() => this.props.navigation.navigate("Login")}
            title="LOGIN"
            color="#1db954"
          />
        </View>
        <View style={styles.button2}>
          <Button
            onPress={() => this.props.navigation.navigate("SignUp")}
            title="SIGNUP"
            color="transparent"
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default IndexScreen;

const bold = "mont-bold";
const regular = "pt-serif";

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    marginHorizontal: screen.width / 15
  },
  heading: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 30,
    textAlign: "center",
    fontFamily: bold,
    width: 400
  },
  subHeading: {
    marginTop: 15,
    color: "#AEAEB2",
    fontWeight: "500",
    fontSize: 15,
    width: 350,
    textAlign: "center",
    padding: 5,
    fontWeight: "500"
  },
  thirdheading: {
    marginTop: 20,
    color: "#AEAEB2",
    fontWeight: "500",
    fontSize: 15,
    width: 350,
    textAlign: "center",
    fontWeight: "500"
  },
  button: {
    marginTop: screen.height / 8,
    marginHorizontal: 50
  },
  button2: {
    marginTop: 10,
    marginHorizontal: 50
  }
});

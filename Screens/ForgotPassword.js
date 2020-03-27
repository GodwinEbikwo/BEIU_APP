import * as React from "react";
import {
  SafeAreaView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Alert,
  Image
} from "react-native";

import Button from "../components/Button";
import Loading from "../assets/animation/Loading.json";
import firebase from "../components/Firebase";
const screen = Dimensions.get("window");

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    errorMessage: null,
    isLoading: false,
    isSuccessful: false
  };

  handleLogin = () => {
    const { email, password } = this.state;
    if (email.split("@")[1] !== "buckingham.ac.uk") {
      Alert.alert("You can only sign in with a buckingham.ac.uk domain");
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        Alert.alert("Error occured", error.message);
      })
      .then(response => {
        this.setState({ isLoading: false });
        if (response) {
          this.setState({ isSuccessful: true });
          Alert.alert("Congrats", "You've logged in successfully!");
        }
      });
  };

  render() {
    return (
      <DismissKeyboard>
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "#111112" }}
          behavior="padding"
          enabled
        >
          <SafeAreaView style={{ marginTop: 18, backgroundColor: "#111112" }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 40
              }}
            >
              <Image
                source={require("../assets/images/surr-searching-1.png")}
                style={{ width: 220, height: 220 }}
              />
            </View>
            <View style={styles.forgotText}>
              <Text style={styles.title}>Forgot your password?</Text>
              <Text style={styles.subTitle}>
                Enter your registered email below to recieve password reset
                instructions
              </Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={styles.labelView}>
                <TextInput
                  placeholder="johndoe@example.com"
                  style={styles.textInput}
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  placeholderTextColor={"grey"}
                  enablesReturnKeyAutomatically={true}
                  keyboardAppearance={"dark"}
                />
              </View>
            </View>

            <View
              style={{
                marginHorizontal: 25,
                marginTop: 10
              }}
            >
              <Button title="SEND" onPress={this.handleLogin} color="#1db954" />
            </View>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
            >
              <View style={styles.footerView}>
                <Text style={styles.footerText}>Back to login</Text>
              </View>
            </TouchableOpacity>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </DismissKeyboard>
    );
  }
}
export default LoginScreen;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const bold = "mont-bold";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    fontFamily: bold
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "grey",
    top: 15,
    textAlign: "center"
  },
  forgotText: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    padding: 18,
    marginBottom: 3,
    borderRadius: 5,
    backgroundColor: "#2C2C2E",
    color: "#fff"
  },
  labelView: { marginHorizontal: 20, marginVertical: 5 },
  labelText: {
    marginBottom: 8,
    fontWeight: "500",
    color: "#AEAEB2",
    fontWeight: "500",
    fontSize: 15,
    fontFamily: bold
  },
  footerView: {
    marginTop: screen.height / 5,
    justifyContent: "center",
    alignItems: "center"
  },
  footerText: {
    color: "white",
    fontWeight: "600",
    fontFamily: bold,
    fontSize: 15
  }
});

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
  Alert
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import * as WebBrowser from "expo-web-browser";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import Button from "../components/Button";
import Loading from "../assets/animation/Loading.json";
import firebase from "../components/Firebase";
const screen = Dimensions.get("window");

function handleHelpPress2() {
  WebBrowser.openBrowserAsync("https://beiu.co.uk/");
}

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    password: "",
    errorMessage: null
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
      });
  };

  render() {
    return (
      <DismissKeyboard>
        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "#0a0a0a" }}
          behavior="padding"
          enabled
        >
          <SafeAreaView style={{ marginTop: 18, backgroundColor: "#0a0a0a" }}>
            <View
              style={{
                marginHorizontal: 20,
                marginTop: 20
              }}
            >
              <View
                style={{
                  marginTop: 10
                }}
              >
                <Text style={styles.title}>Sign In</Text>
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                <Text style={styles.labelText}>Email</Text>
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

              <View style={{ marginHorizontal: 20, marginVertical: 5 }}>
                <Text style={styles.labelText}>Password</Text>
                <TextInput
                  placeholder="password"
                  style={styles.textInput}
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  secureTextEntry
                  placeholderTextColor={"grey"}
                  keyboardAppearance={"dark"}
                  enablesReturnKeyAutomatically={true}
                />
              </View>

              <View
                style={{
                  marginHorizontal: 25
                }}
              >
                <Button
                  title="LOGIN"
                  onPress={this.handleLogin}
                  color="#1db954"
                />
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <View style={styles.footer}>
                  <Text style={{ color: "grey", fontSize: 15 }}>
                    Don't have an account?{" "}
                    <Text style={styles.footerText}>Sign Up</Text>
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleHelpPress2}>
                <View
                  style={{
                    marginTop: 15,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ color: "grey", fontSize: 15 }}>
                    What is BEIU?
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
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
const regular = "pt-serif";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    fontFamily: bold
  },
  textInput: {
    padding: 15,
    marginBottom: 3,
    borderRadius: 5,
    backgroundColor: "#2C2C2E",
    color: "#fff"
  },
  labelText: {
    marginBottom: 3,
    fontWeight: "500",
    color: "#eeeeee",
    fontFamily: regular,
    fontSize: 17
  },
  footer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  footerText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#33FF7A",
    fontFamily: regular
  },
  icon: {
    marginTop: screen.height / 15,
    marginHorizontal: 20,
    backgroundColor: "#eee",
    opacity: 0.5,
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center"
  }
});

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
                marginHorizontal: 20,
                marginTop: 40,
                marginBottom: 10
              }}
            >
              <View style={{ marginBottom: 30 }}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.goBack();
                  }}
                >
                  <Ionicons
                    name="md-arrow-back"
                    color="#fff"
                    size={Platform.OS === "ios" ? 28 : 27}
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.title}>Log in to your account</Text>
            </View>

            <View style={{ marginTop: 20 }}>
              <View style={styles.labelView}>
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

              <View style={styles.labelView}>
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
              <View style={{ marginHorizontal: 24, marginVertical: 5 }}>
                <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
              </View>
            </View>

            <View
              style={{
                marginTop: screen.height / 4,
                marginHorizontal: 25
              }}
            >
              <Button
                title="LOGIN"
                onPress={this.handleLogin}
                color="#1db954"
              />

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("SignUp")}
              >
                <View style={styles.footer}>
                  <Text
                    style={{ color: "grey", fontSize: 15, fontWeight: "500" }}
                  >
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
                  <Text
                    style={{
                      color: "#1db954",
                      fontSize: 15,
                      fontWeight: "500"
                    }}
                  >
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
  forgotPasswordText: {
    marginTop: 10,
    color: "#1db954",
    fontWeight: "400",
    fontFamily: "mont-bold",
    fontSize: 15
  }
});

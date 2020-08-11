import React, { useState, useContext } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Platform,
} from "react-native";
import { AuthContext } from "../navigator/AuthProvider";
import Button from "../components/Button";
const screen = Dimensions.get("window");
import { COLORS } from "../components/Colors";
import { useStatusBar } from "../utils/Hook";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const bold = "DM-Bold";
const regular = "DM-Medium";

function LoginScreen({ navigation }) {
  useStatusBar("light-content");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          marginTop: screen.height / -3.5,
          backgroundColor: COLORS.bColor,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text style={styles.title}>Log in to your account</Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={styles.labelView}>
            <Text style={styles.labelText}>Email</Text>
            <TextInput
              placeholder="email@you.com"
              style={styles.textInput}
              placeholderTextColor={COLORS.placeHolderColor}
              keyboardAppearance={"dark"}
              onChangeText={(email) => setEmail(email)}
              value={email}
            />
          </View>

          <View style={styles.labelView}>
            <Text style={styles.labelText}>Password</Text>
            <TextInput
              placeholder="password"
              style={styles.textInput}
              secureTextEntry
              placeholderTextColor={COLORS.placeHolderColor}
              keyboardAppearance={"dark"}
              onChangeText={(password) => setPassword(password)}
              value={password}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <View style={{ marginHorizontal: 24, marginVertical: 5 }}>
              <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: screen.height / 16,
            marginHorizontal: 25,
          }}
        >
          <Button
            title="LOGIN"
            color={COLORS.buttonColor}
            onPress={() => login(email, password)}
            radius={3}
            titleColor="#fff"
          />

          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <View style={styles.footer}>
              <Text
                style={{
                  color: COLORS.textColor,
                  fontSize: 15,
                  fontFamily: regular,
                }}
              >
                Don't have an account?{" "}
                <Text style={styles.footerText}>Sign Up</Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    color: COLORS.textColor,
    fontFamily: bold,
  },
  textInput: {
    padding: 18,
    marginBottom: 3,
    borderRadius: 5,
    backgroundColor: COLORS.inputColor,
    color: COLORS.textColor,
  },
  labelView: { marginHorizontal: 20, marginVertical: 10 },
  labelText: {
    marginBottom: 8,
    color: COLORS.textColor,
    fontSize: 15,
    fontFamily: bold,
  },
  footer: {
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 15,
    color: COLORS.smallTextColor,
    fontFamily: regular,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: COLORS.smallTextColor,
    fontFamily: bold,
    fontSize: 15,
  },
});

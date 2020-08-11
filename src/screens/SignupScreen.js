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
  Platform,
  Dimensions,
} from "react-native";
import { AuthContext } from "../navigator/AuthProvider";
import Button from "../components/Button";
import { COLORS } from "../components/Colors";
import { useStatusBar } from "../utils/Hook";
const screen = Dimensions.get("window");
const bold = "DM-Bold";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

function SignupScreen({ navigation }) {
  useStatusBar("light-content");
  const [username, setUsername] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);
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
          <Text style={styles.title}>Create your account</Text>
        </View>

        <View style={{ marginTop: 15 }}>
          <View style={styles.labelView}>
            <Text style={styles.labelText}>Username</Text>
            <TextInput
              placeholder="Barack Obama"
              style={styles.textInput}
              placeholderTextColor={COLORS.placeHolderColor}
              keyboardAppearance={"dark"}
              onChangeText={(username) => setUsername(username)}
              value={username}
            />

            <Text style={styles.labelText}>Year of Study</Text>
            <TextInput
              placeholder="1st or 2nd year"
              style={styles.textInput}
              placeholderTextColor={COLORS.placeHolderColor}
              keyboardAppearance={"dark"}
              onChangeText={(year) => setYear(year)}
              value={year}
            />

            <Text style={styles.labelText}>Email</Text>
            <TextInput
              placeholder="johndoe@example.com"
              style={styles.textInput}
              placeholderTextColor={COLORS.placeHolderColor}
              keyboardAppearance={"dark"}
              onChangeText={(email) => setEmail(email)}
              value={email}
            />

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

          <View
            style={{
              marginHorizontal: 25,
            }}
          >
            <Button
              title="SIGNUP"
              color={COLORS.buttonColor}
              titleColor="#fff"
              radius={3}
              onPress={() => register(username, year, email, password)}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View
              style={{
                marginTop: 5,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: COLORS.textColor,
                  fontSize: 15,
                  fontFamily: bold,
                }}
              >
                Have an account?{" "}
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "500",
                    color: COLORS.smallTextColor,
                    fontFamily: bold,
                  }}
                >
                  Sign in
                </Text>
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bColor },
  title: {
    fontSize: 32,
    color: COLORS.textColor,
    fontFamily: bold,
  },
  textInput: {
    padding: 18,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: COLORS.inputColor,
    color: COLORS.textColor,
  },
  labelView: {
    marginHorizontal: 20,
  },
  labelText: {
    marginBottom: 8,
    color: COLORS.textColor,
    fontSize: 15,
    fontFamily: bold,
  },
});

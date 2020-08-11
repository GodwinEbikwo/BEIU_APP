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
  Image,
} from "react-native";
import Button from "../components/Button";

const screen = Dimensions.get("window");

function ForgotPassword({ navigation }) {
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
              marginTop: 40,
            }}
          >
            <Image
              source={{
                uri:
                  "https://p15.f3.n0.cdn.getcloudapp.com/items/DOu8Zezy/surr-delete-confimation.png?v=5b004e7045c12a79bf704c48ea14df1b",
              }}
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
                placeholderTextColor={"grey"}
                enablesReturnKeyAutomatically={true}
                keyboardAppearance={"dark"}
              />
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 25,
              marginTop: 10,
            }}
          >
            <Button
              color="#1db954"
              title="Confirm"
              titleColor="#fff"
              radius={3}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
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
export default ForgotPassword;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const bold = "DM-Bold";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    fontFamily: bold,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "500",
    color: "grey",
    top: 15,
    textAlign: "center",
  },
  forgotText: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    padding: 18,
    marginBottom: 3,
    borderRadius: 5,
    backgroundColor: "#2C2C2E",
    color: "#fff",
  },
  labelView: { marginHorizontal: 20, marginVertical: 5 },
  labelText: {
    marginBottom: 8,
    fontWeight: "500",
    color: "#AEAEB2",
    fontWeight: "500",
    fontSize: 15,
    fontFamily: bold,
  },
  footerView: {
    marginTop: screen.height / 5,
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontWeight: "600",
    fontFamily: bold,
    fontSize: 15,
  },
});

import React, { useContext, useState, useEffect } from "react";
import {
  SafeAreaView,
  Alert,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Button,
  ActivityIndicator,
  Modal,
  StyleSheet,
  StatusBar,
  TextInput,
} from "react-native";
import { AuthContext } from "../navigator/AuthProvider";
import { COLORS } from "../components/Colors";
import { Feather } from "@expo/vector-icons";
import firebase from "../config/Firebase";
import { Notifier, NotifierComponents } from "react-native-notifier";

function Settings({ navigation }) {
  const signOutAlert = () => {
    Alert.alert("SignOut", "Are you sure you want to leave ?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancelled"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => logout(),
      },
    ]);
  };
  const { user, logout } = useContext(AuthContext);
  navigation.setOptions({
    headerRight: () => (
      <Feather
        onPress={signOutAlert}
        name="log-out"
        size={23}
        color={COLORS.textColor}
      />
    ),
  });

  let itemsRef = firebase.firestore().doc(`users/${user.uid}`);

  const [isLoading, setIsLoading] = useState(false);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [social_link, setSocialLink] = useState("");
  useEffect(() => {
    firebase
      .firestore()
      .collection("first-years")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const data = doc.data();
        console.log("first", data);
        setFirst(data);
      });
  }, []);

  useEffect(() => {
    firebase
      .firestore()
      .collection("second-year")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const data = doc.data();
        console.log("second", data);
        setSecond(data);
      });
  }, []);

  const storeUser = () => {
    if (social_link === "") {
      Notifier.showNotification({
        title: "Fill in the empty field",
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: "error",
        },
      });
    } else {
      setIsLoading(true);
      itemsRef
        .set({
          displayName: displayName,
          email: email,
          social_link: social_link,
        })
        .then((res) => {
          setDisplayName("");
          setEmail("");
          setSocialLink("");
          setIsLoading(false);
          Notifier.showNotification({
            title: "Added to the database",
            Component: NotifierComponents.Alert,
            componentProps: {
              alertType: "success",
            },
          });
          setModalVisible(!modalVisible);
        })
        .catch((err) => {
          console.error("Error found: ", err);
          setIsLoading(false);
        });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bColor }}>
      <StatusBar barStyle="light-content" animated={true} />
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
          }}
        >
          {first ? (
            <View>
              <Text style={{ color: "#fff" }}>{`Hi ${first.username}`}</Text>
              <Text style={{ color: "#fff" }}>{`Hi ${first.email}`}</Text>
            </View>
          ) : (
            <Text></Text>
          )}
          {second ? (
            <View>
              <Text
                style={{ color: "#fff" }}
              >{` Hi ${second.username}  `}</Text>
              <Text style={{ color: "#fff" }}>{`Hi ${second.email}`}</Text>
            </View>
          ) : (
            <Text></Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}
          style={styles.button}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>
            Update user info
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="pageSheet"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <StatusBar barStyle="light-content" animated={true} />

            <View style={styles.modalView}>
              <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 25, fontFamily: "Copperplate-Bold" }}>
                  Update user info
                </Text>
              </View>
              <View style={{ alignItems: "flex-end", right: 20 }}>
                <Button
                  title="close"
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                />
              </View>

              <TextInput
                placeholder={"Name"}
                placeholderTextColor="#000"
                value={displayName}
                onChangeText={(displayName) => setDisplayName(displayName)}
                style={styles.inputGroup}
              />

              <TextInput
                placeholder={"Email"}
                placeholderTextColor="#000"
                keyboardType="email-address"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputGroup}
              />

              <TextInput
                placeholder={"Website link"}
                placeholderTextColor="#000"
                value={social_link}
                keyboardType="url"
                onChangeText={(social_link) => setSocialLink(social_link)}
                style={styles.inputGroup}
              />
              <View style={{ marginHorizontal: 22, marginTop: -5 }}>
                <Text
                  style={{
                    color: "grey",
                    fontSize: 12,
                    fontFamily: "Copperplate-Light",
                  }}
                >
                  Type the name of the website with a .("com") for example
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => storeUser()}
                style={styles.button}
              >
                <Text
                  style={[
                    styles.buttonText,
                    { color: "white", fontFamily: "Copperplate-Bold" },
                  ]}
                >
                  Update user info
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputGroup: {
    marginTop: 20,
    padding: 20,
    marginBottom: 15,
    marginHorizontal: 20,
    backgroundColor: "#f7f7f7",
    borderRadius: 3,
    color: "#000",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    marginHorizontal: 20,
    marginTop: 15,
    borderRadius: 3,
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "600",
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    marginTop: 30,
  },
});

export default Settings;

import React, { useState, createContext } from "react";
import { Alert } from "react-native";
import firebase from "../config/Firebase";
import { Notifier, NotifierComponents } from "react-native-notifier";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  signOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log("signed out");
    } catch (err) {
      console.log("error signing out...", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            if (email === "" || password === "") {
              Alert.alert("Input your details");
              return;
            }
            await firebase.auth().signInWithEmailAndPassword(email, password);
            console.log("logged in");
          } catch (error) {
            Alert.alert("Error occured", error.message);
            console.log(error);
          }
        },
        register: async (username, year, email, password) => {
          let timestamp = Number(Date.now());
          const date = new Date(timestamp).toDateString();
          try {
            if (email === "") {
              Notifier.showNotification({
                title: "Opps 😓",
                description: "it seems you didn't fill in your email",
                Component: NotifierComponents.Alert,
                componentProps: {
                  alertType: "error",
                },
              });
              return;
            }
            if (year === "first year" || year === "First year") {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((cred) => {
                  return firebase
                    .firestore()
                    .collection("first-years")
                    .doc(cred.user.uid)
                    .set({
                      username: username,
                      year: year,
                      email: email,
                      created_at: date,
                    });
                });
              console.log(" first year user registered");
              return;
            } else if (year === "second year" || year === "Second year") {
              await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((cred) => {
                  return firebase
                    .firestore()
                    .collection("second-year")
                    .doc(cred.user.uid)
                    .set({
                      username: username,
                      year: year,
                      email: email,
                      created_at: date,
                    });
                });
              console.log("second year user  registered");
              return;
            }
          } catch (error) {
            Alert.alert("Opps", error.message);
            console.log(error);
          }
        },
        logout: async () => {
          try {
            await firebase.auth().signOut();
            console.log("signed out");
          } catch (error) {
            console.log("error signing out...", error);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

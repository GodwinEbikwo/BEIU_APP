import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "../config/Firebase";
import AuthStack from "./AuthStack";
import HomeStackApp from "./HomeStackApp";
import { AuthContext } from "./AuthProvider";
import LoadingScreen from "../components/LoadingScreen";

export default function Routes() {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    setLoading(true);
    setUser(user);
    if (initializing) setInitializing(false);
    setLoading(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {loading ? <LoadingScreen /> : user ? <HomeStackApp /> : <AuthStack />}
    </NavigationContainer>
  );
}

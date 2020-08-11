import { enableScreens } from "react-native-screens";
import React from "react";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPassword from "../screens/ForgotPassword";
import Landing from "../screens/Landing";
import { Ionicons } from "@expo/vector-icons";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
enableScreens();
const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Landing Page"
      mode="modal"
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          backgroundColor: "#1c1c1e",
          shadowColor: "transparent",
        },
        headerBackImage: () => (
          <Ionicons
            name="md-arrow-back"
            size={26}
            color="grey"
            style={{ padding: 10 }}
          />
        ),
        headerBackTitleStyle: {
          color: "grey",
        },
        headerTitleStyle: {
          fontFamily: "DM-Bold",
          color: "#fff",
        },
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerStatusBarHeight:
          navigation.dangerouslyGetState().routes.indexOf(route) > 0
            ? 0
            : undefined,
        ...TransitionPresets.ModalPresentationIOS,
        gestureResponseDistance: {
          vertical: 600,
        },
      })}
    >
      <Stack.Screen
        name="Landing Page"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerLeft: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          headerLeft: false,
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

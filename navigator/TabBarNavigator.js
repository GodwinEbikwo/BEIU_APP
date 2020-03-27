import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Main from "../screens/Main";
import Post from "../screens/Post";
import { Ionicons } from "@expo/vector-icons";
import Society from "../screens/Society";
import societyScreen from "../screens/societyScreen";
import StaffScreen from "../screens/StaffScreen";
import { Icon } from "react-native-elements";
import Staff from "../screens/Staff";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import LoadingScreen from "../screens/LoadingScreen";
import IndexScreen from "../screens/IndexScreen";
import Bookmark from "../screens/Bookmark";
import Settings from "../screens/Settings";
import Document from "../src/Document";
import ForgotPassword from "../screens/ForgotPassword";

const activeColor = "#1db954";
const inactiveColor = "#777E8B";
const BackColor = "#1C1C1E";
// "#111112";
const fontText = "mont-regular";

const HomeStack = createStackNavigator(
  {
    MainScreen: Main,
    mainPostScreen: Post,
    DocumentScreen: Document,
    Settings
  },
  {
    initialRouteName: "MainScreen",
    defaultNavigationOptions: {
      header: null
    }
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (
    routeName == "mainPostScreen" ||
    routeName == "TestScreen" ||
    routeName == "DocumentScreen" ||
    routeName == "Settings"
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Icon
        name="home"
        type="feather"
        color={focused ? activeColor : inactiveColor}
        size={24}
        style={{ backgroundColor: "transparent" }}
      />
    ),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
      labelStyle: {
        fontFamily: fontText
      },
      style: {
        height: Platform.OS === "ios" ? 50 : 55,
        paddingTop: Platform.OS === "ios" ? 10 : 8,
        backgroundColor: BackColor,
        borderTopColor: BackColor
      }
    }
  };
};
const ExploreStack = createStackNavigator({
  Society,
  societyScreen
});

ExploreStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "societyScreen") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Socieites",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-search"
        color={focused ? activeColor : inactiveColor}
        size={24}
        style={{ backgroundColor: "transparent" }}
      />
    ),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
      labelStyle: {
        fontFamily: fontText
      },
      style: {
        height: Platform.OS === "ios" ? 50 : 55,
        paddingTop: Platform.OS === "ios" ? 10 : 8,
        backgroundColor: BackColor,
        borderTopColor: BackColor
      }
    }
  };
};

const InformationStack = createStackNavigator({
  StaffScreen,
  Staff
});

InformationStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Staff" || routeName == "" || routeName == "") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Staff",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-people"
        color={focused ? activeColor : inactiveColor}
        size={24}
        style={{ backgroundColor: "transparent" }}
      />
    ),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
      labelStyle: {
        fontFamily: fontText
      },
      style: {
        height: Platform.OS === "ios" ? 50 : 55,
        paddingTop: Platform.OS === "ios" ? 10 : 8,
        backgroundColor: BackColor,
        borderTopColor: "BackColor"
      }
    }
  };
};

const BookmarkStack = createStackNavigator(
  {
    Bookmark
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

BookmarkStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "" || routeName == "" || routeName == "") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Bookmarks",
    tabBarIcon: ({ focused }) => (
      <Icon
        name="bookmark"
        type="feather"
        color={focused ? activeColor : inactiveColor}
        size={24}
        style={{ backgroundColor: "transparent" }}
      />
    ),
    tabBarOptions: {
      showLabel: true,
      activeTintColor: activeColor,
      inactiveTintColor: inactiveColor,
      labelStyle: {
        fontFamily: fontText
      },
      style: {
        height: Platform.OS === "ios" ? 50 : 55,
        paddingTop: Platform.OS === "ios" ? 10 : 8,
        backgroundColor: BackColor,
        borderTopColor: "BackColor"
      }
    }
  };
};

const TabBarNavigator = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  InformationStack,
  BookmarkStack
});

const AuthStack = createStackNavigator({
  Index: IndexScreen,
  Login: LoginScreen,
  SignUp: SignupScreen,
  forgotPassword: ForgotPassword
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: TabBarNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);

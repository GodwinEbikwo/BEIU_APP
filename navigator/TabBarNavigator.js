import React from "react";
import { createAppContainer } from "react-navigation";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import Main from "../Screens/Main";
import Post from "../Screens/Post";
import { Ionicons } from "@expo/vector-icons";
import Society from "../Screens/Society";
import societyScreen from "../Screens/societyScreen";
import StaffScreen from "../Screens/StaffScreen";

const activeColor = "#5f85db";
const inactiveColor = "#777E8B";
const BackColor = "#17223B";
const fontText = "mont-regular";

const HomeStack = createStackNavigator(
  {
    MainScreen: Main,
    mainPostScreen: Post
  },
  {
    initialRouteName: "MainScreen"
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "mainPostScreen" || routeName == "Staff") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="md-home"
        color={focused ? activeColor : inactiveColor}
        size={28}
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
        paddingTop: Platform.OS === "ios" ? 5 : 10,
        backgroundColor: BackColor
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
        size={28}
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
        paddingTop: Platform.OS === "ios" ? 5 : 10,
        backgroundColor: BackColor
      }
    }
  };
};

const InformationStack = createStackNavigator({
  StaffScreen
});

InformationStack.navigationOptions = ({ navigation }) => {
  var tabBarVisible = true;
  //   const routeName = navigation.state.routes[navigation.state.index].routeName;

  //   if (routeName == "News" || routeName == "" || routeName == "") {
  //     tabBarVisible = false;
  //  }

  return {
    tabBarVisible,
    tabBarLabel: "Staff",
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name="ios-list-box"
        color={focused ? activeColor : inactiveColor}
        size={26}
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
        paddingTop: Platform.OS === "ios" ? 5 : 10,
        backgroundColor: BackColor
      }
    }
  };
};
const TabBarNavigator = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  InformationStack
});

export default createAppContainer(TabBarNavigator);

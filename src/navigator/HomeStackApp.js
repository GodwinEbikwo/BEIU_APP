import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { enableScreens } from "react-native-screens";
import {} from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Feather } from "@expo/vector-icons";
import Post from "../screens/Post";
import Document from "../Document";
import Settings from "../screens/Settings";
import Society from "../screens/Society";
import societyScreen from "../screens/societyScreen";
import { View, Text } from "react-native";
import StaffScreen from "../screens/StaffScreen";
import Staff from "../screens/Staff";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import { COLORS } from "../components/Colors";
enableScreens();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLargeTitle: "false",
        headerTranslucent: "true",
        headerStyle: {
          backgroundColor: COLORS.bColor,
          shadowColor: "transparent",
        },
        headerTitleStyle: {
          fontFamily: "DM-Bold",
          color: COLORS.largeTextColor,
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: {
            backgroundColor: COLORS.headerColor,
          },
          headerTitleStyle: {
            fontFamily: "DM-Bold",
            color: "#fff",
          },
        }}
      />
    </Stack.Navigator>
  );
}

function SocietyStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Society"
      screenOptions={{
        headerLargeTitle: "true",
        headerTranslucent: "true",
        headerStyle: {
          backgroundColor: COLORS.bColor,
          shadowColor: "transparent",
        },
        headerTitleStyle: {
          fontFamily: "DM-Bold",
          color: COLORS.largeTextColor,
        },
      }}
    >
      <Stack.Screen
        name="Society"
        component={Society}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

function StaffStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StaffScreen"
        component={StaffScreen}
        options={({ route, navigation }) => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
}

const HomeTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "grid";
          }
          if (route.name === "Societies") {
            iconName = "search";
          }
          if (route.name === "Staffs") {
            iconName = "book";
          } else if (route.name === "Notification") {
            iconName = "bell";
          }

          return <Feather name={iconName} size={26} color={color} />;
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#fff",
        inactiveTintColor: "grey",
        style: {
          backgroundColor: "#111112",
          borderTopColor: "transparent",
          padding: 5,
          fontFamily: "DM-Regular",
        },
      }}
    >
      <Tab.Screen name="Home" children={() => <HomeStackScreen />} />
      <Tab.Screen name="Societies" children={() => <SocietyStackScreen />} />
      <Tab.Screen name="Staffs" children={() => <StaffStackScreen />} />
    </Tab.Navigator>
  );
};

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.bColor,
          shadowColor: "transparent",
        },
        headerTitleStyle: {
          fontFamily: "DM-Bold",
          color: COLORS.largeTextColor,
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen
        name="Document"
        component={Document}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="societyScreen"
        component={societyScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Staff"
        component={Staff}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const HomeStackApp = () => {
  return <AppNavigator />;
};

export default HomeStackApp;

export const DummyScreen = ({ name }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0a0a0a",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#ffffff", fontSize: 36, fontFamily: "DM-Bold" }}>
        {name}
      </Text>
    </View>
  );
};

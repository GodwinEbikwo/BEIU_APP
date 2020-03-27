import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  View,
  Button
} from "react-native";
import { Text } from "../src/Text";
import Header from "../src/Header";
import { styles as headerStyles } from "../src/Header/styles";
import { ScrollView } from "../src/ScrollContext";
import FontAwesome from "react-native-vector-icons/Ionicons";
import { ListItem, Icon } from "react-native-elements";
import firebase from "../components/Firebase";

const list = [
  {
    title: "Account",
    icon: "user"
  },
  {
    title: "Notification",
    icon: "bell"
  },
  {
    title: "DarkMode",
    icon: "moon"
  },
  {
    title: "LogOut",
    icon: "log-out"
  }
];

class Settings extends React.Component {
  signOutUser = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#111112" }}>
        <Header
          title="Settings"
          headerLeft={
            <Text
              style={headerStyles.headerText}
              onPress={() => this.props.navigation.goBack()}
              primaryColor
              heading
            >
              <FontAwesome name="md-arrow-back" size={15} /> Back
            </Text>
          }
        />

        <ScrollView contentContainerStyle={styles.container}>
          <View
            style={{
              marginHorizontal: 15,
              marginTop: 5
            }}
          >
            <Text style={styles.title}>Settings</Text>
          </View>
          <View>
            {list.map((item, i) => (
              <TouchableOpacity key={i}>
                <ListItem
                  title={item.title}
                  leftIcon={{
                    name: item.icon,
                    color: "grey",
                    type: "feather"
                  }}
                  titleStyle={styles.listTitle}
                  containerStyle={{
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderBottomColor: "#48484A",
                    backgroundColor: "#242426"
                  }}
                  chevron={
                    <Icon
                      name="arrow-right"
                      type="feather"
                      color="#48484A"
                      size={19}
                    />
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
          <Button title="signOut" onPress={this.signOutUser} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom: 50
  },
  title: {
    marginBottom: 12,
    textAlign: "left",
    width: "100%",
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    fontFamily: "mont-bold"
  },
  paragraph: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 21
  },
  listTitle: {
    fontFamily: Platform.OS === "ios" ? "mont-bold" : null,
    color: "#E5E5EA",
    fontSize: 15
  }
});

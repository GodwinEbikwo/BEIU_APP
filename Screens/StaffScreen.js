import React, { Component } from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  Platform,
  TextInput,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import { Icon } from "react-native-elements";
import { getUsers, contains } from "../api/index";
import _ from "lodash";
import { ListItem } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import Tags from "../components/Tags";

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

class StaffScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      query: "",
      fullData: []
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = _.debounce(() => {
    this.setState({ loading: true });

    getUsers(15, this.state.query)
      .then(users => {
        this.setState({
          loading: false,
          data: users,
          fullData: users
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }, 250);

  handleSearch = text => {
    const formatQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, user => {
      return contains(user, formatQuery);
    });
    this.setState({ query: formatQuery, data }, () => this.makeRemoteRequest());
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#2C2C2E"
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View
        style={{
          flex: 1,
          marginBottom: 5,
          marginTop: Platform.OS === "ios" ? null : 30
        }}
      >
        <View style={{ marginHorizontal: 10, marginTop: 20 }}>
          <Text
            style={{ fontSize: 20, fontFamily: "mont-bold", color: "#fff" }}
          >
            What can we help you find?
          </Text>
        </View>
        <View style={styles.searchBar}>
          <Ionicons
            name="ios-search"
            size={20}
            color={"grey"}
            style={{ backgroundColor: "transparent", marginHorizontal: 10 }}
          />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Try Katie Jones..."
            placeholderTextColor="grey"
            onChangeText={this.handleSearch}
            keyboardAppearance={"dark"}
            clearTextOnFocus={false}
            style={{
              flex: 1,
              fontWeight: "700",
              backgroundColor: "#2C2C2E",
              color: "#fff"
            }}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <DismissKeyboard>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#0a0a0a" }}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.email}
                onPress={() => {
                  this.props.navigation.push("Staff", {
                    screenPost: item
                  });
                }}
              >
                <View style={{ flex: 1 }}>
                  <ListItem
                    title={`${item.name.first} ${item.name.last}`}
                    subtitle={item.email}
                    leftAvatar={{ source: { uri: item.picture.large } }}
                    containerStyle={{
                      borderBottomWidth: 0,
                      backgroundColor: "#111112"
                    }}
                    titleStyle={styles.title}
                    subtitleStyle={styles.textSubtitle}
                    chevron={
                      <Icon
                        name="arrow-right"
                        type="feather"
                        color="#48484A"
                        size={19}
                      />
                    }
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </DismissKeyboard>
    );
  }
}
export default StaffScreen;

const titleText = "mont-bold";
const subtitleText = "pt-serif";

const styles = StyleSheet.create({
  title: {
    fontFamily: titleText,
    color: "#AEAEB2",
    fontSize: 15
  },
  textSubtitle: {
    fontFamily: subtitleText,
    color: "#eee",
    fontSize: 13
  },
  searchBar: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "#2C2C2E",
    marginHorizontal: 5,
    borderRadius: 3,
    marginTop: Platform.OS == "android" ? 8 : 8,
    marginBottom: 5
  }
});

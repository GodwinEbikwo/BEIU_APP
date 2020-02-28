import React, { Component } from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Platform,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { Icon } from "react-native-elements";
import { getUsers, contains } from "../api/index";
import _ from "lodash";
import { ListItem } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

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
          backgroundColor: "#f1f3f4"
        }}
      />
    );
  };

  renderHeader = () => {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={styles.searchBar}>
          <Ionicons
            name="ios-search"
            size={20}
            style={{ backgroundColor: "transparent", marginHorizontal: 10 }}
          />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Try Katie Jones..."
            placeholderTextColor="#5f6769"
            onChangeText={this.handleSearch}
            clearTextOnFocus={false}
            // enablesReturnKeyAutomatically={true}
            style={{
              flex: 1,
              fontWeight: "700",
              backgroundColor: "#ededed"
            }}
          />
        </View>
      </View>
    );
  };
  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  render() {
    return (
      <DismissKeyboard>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
          <ScrollView
            scrollEventThrottle={16}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: Platform.OS == "android" ? 25 : null
              }}
            >
              <Icon
                name="circle"
                type="font-awesome"
                color="#1089FF"
                size={45}
                style={{ backgroundColor: "transparent" }}
              />
            </View>

            <FlatList
              data={this.state.data}
              keyExtractor={item => item.email}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
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
                      containerStyle={{ borderBottomWidth: 0 }}
                      titleStyle={styles.title}
                      subtitleStyle={styles.textSubtitle}
                      chevron={
                        <Icon
                          name="arrow-right"
                          type="feather"
                          color="#979797"
                          size={19}
                        />
                      }
                    />
                  </View>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
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
    color: "#212121",
    fontSize: 15
  },
  textSubtitle: {
    fontFamily: subtitleText,
    color: "#393e46",
    fontSize: 13
  },
  searchBar: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#ededed",
    marginHorizontal: 5,
    borderRadius: 7,
    marginTop: Platform.OS == "android" ? 8 : 8,
    marginBottom: 5
  }
});

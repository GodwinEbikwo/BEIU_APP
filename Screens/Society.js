import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Dimensions,
  Platform
} from "react-native";
import { Query } from "react-apollo";
import styled from "styled-components/native";
import SocietiesComponent from "../components/SocietiesComponent";
import SearchBar from "../components/SearchBar";
const { height, width } = Dimensions.get("window");
import LottieView from "lottie-react-native";
import { sostsQuery, allSocietysQuery } from "../components/Query";
import Header from "../src/Header";

import { ScrollView } from "../src/ScrollContext";

const animation = require("../assets/animation/error.json");

class Society extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Search" />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              marginHorizontal: 20,
              marginBottom: Platform.OS === "ios" ? 10 : -26
            }}
          >
            <Text
              style={{ fontFamily: "mont-bold", fontSize: 30, color: "#fff" }}
            >
              Search
            </Text>
          </View>
          <View style={styles.titleBar}>
            <SearchBar />
          </View>
          <Query query={sostsQuery} pollInterval={500}>
            {({ loading, error, data }) => {
              if (loading)
                return <ActivityIndicator size="small" color="#000" />;
              if (error)
                return (
                  <View style={styles.message}>
                    <LottieView
                      source={animation}
                      autoPlay
                      style={{ width: 150, height: 150 }}
                      resizeMode="cover"
                    />
                    <Text style={{ fontFamily: "mont-regular", color: "grey" }}>
                      An error occured
                    </Text>
                  </View>
                );

              return (
                <View style={styles.queryView}>
                  <View style={{ marginBottom: 6 }}>
                    <Text style={styles.caption}>Popular Socieities</Text>
                  </View>
                  <TouchableOpacity>
                    <View style={styles.largeCardView}>
                      <Image
                        source={{
                          uri:
                            "https://p15.f3.n0.cdn.getcloudapp.com/items/yAuvPz6g/plant.png?v=223d03e61bec5de28e09de7b51be9014"
                        }}
                        style={styles.largeCardImage}
                      />
                      <Text style={styles.largeCardText}>
                        Carribean Society
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {data.allSocieties.map(allSociety => (
                    <TouchableOpacity
                      key={allSociety.slug}
                      onPress={() => {
                        this.props.navigation.push("societyScreen", {
                          screenSociety: allSociety
                        });
                      }}
                    >
                      <SocietiesComponent
                        title={allSociety.title}
                        code={allSociety.color.hex}
                        shadow={allSociety.color.hex}
                        image={{
                          uri: `https://media.graphcms.com/${allSociety.imageOne.handle}`
                        }}
                      />
                    </TouchableOpacity>
                  ))}
                  <View style={{ marginBottom: 6 }}>
                    <Text style={styles.caption}>Browse All</Text>
                  </View>
                </View>
              );
            }}
          </Query>

          <Query query={allSocietysQuery} pollInterval={500}>
            {({ loading, error, data }) => {
              if (loading)
                return <ActivityIndicator size="small" color="#fff" />;
              if (error) return <Message></Message>;

              return (
                <View style={styles.allSocietyView}>
                  {data.societies.map(society => (
                    <TouchableOpacity
                      key={society.slug}
                      onPress={() => {
                        this.props.navigation.push("societyScreen", {
                          screenSociety: society
                        });
                      }}
                    >
                      <SocietiesComponent
                        title={society.title}
                        code={society.color.hex}
                        shadow={society.color.hex}
                        image={{
                          uri: `https://media.graphcms.com/${society.imageOne.handle}`
                        }}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              );
            }}
          </Query>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Society;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111112"
  },
  titleBar: {
    paddingLeft: 5,
    paddingBottom: 5
  },
  caption: {
    color: "#AEAEB2",
    fontSize: 15,
    fontFamily: "mont-bold"
  },
  largeCardText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "mont-bold",
    width: 120,
    top: 5,
    left: 10
  },
  largeCardView: {
    height: 125,
    width: width - 40,
    backgroundColor: "#5f85db",
    borderRadius: 4,
    marginBottom: 4
  },
  queryView: {
    paddingHorizontal: 20,
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  allSocietyView: {
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  message: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  largeCardImage: {
    width: 90,
    height: 90,
    position: "absolute",
    resizeMode: "cover",
    left: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    top: 15,
    transform: [{ rotate: "45deg" }]
  }
});

const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Button,
  Dimensions
} from "react-native";
import { Query } from "react-apollo";
import NewCard from "../components/Card/NewCard";
import { SecondCard } from "../components/Card/SecondCard";
import styled from "styled-components";
import Moment from "../components/Moment";
import Categories from "../components/Categories";
import Reminders from "../components/Reminders";
import LottieView from "lottie-react-native";
import firebase from "../components/Firebase";
import { postQuery, postTwoQuery, reminderQuery } from "../components/Query";
import { BlurView } from "expo";

const animation = require("../assets/animation/error.json");
const { height, width } = Dimensions.get("window");

class Main extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      displayName: ""
    };
  }

  componentDidMount() {
    const { displayName, email } = firebase.auth().currentUser;
    this.setState({ displayName, email });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={styles.titleBar}>
            <Moment />
          </View>

          <View style={styles.newsView}>
            <View style={{ marginTop: 10, marginBottom: 10 }}>
              <Query query={reminderQuery} pollInterval={1000}>
                {({ loading, error, data }) => {
                  if (loading)
                    return <ActivityIndicator size="small" color="#fff" />;
                  if (error)
                    return (
                      <View style={styles.message}>
                        <LottieView
                          source={animation}
                          autoPlay
                          style={{ width: 150, height: 150 }}
                          resizeMode="cover"
                        />
                        <Text
                          style={{ fontFamily: "mont-regular", color: "grey" }}
                        >
                          An error occured
                        </Text>
                      </View>
                    );
                  return (
                    <View>
                      <View style={{ marginLeft: 15 }}>
                        <Text style={[styles.subCaption, { color: "#33FF7A" }]}>
                          Daily news
                        </Text>
                      </View>
                      <Text style={styles.newsText}>
                        <Text>Hi {this.state.displayName}</Text> you have an
                        assigment due in week 3, here are a couple of tips and
                        tricks to help you
                      </Text>
                      {data.reminders.map(reminder => (
                        <TouchableOpacity
                          activeOpacity={1}
                          key={reminder.slug}
                          onPress={() => {
                            this.props.navigation.push("DocumentScreen", {
                              screenPost: reminder
                            });
                          }}
                        >
                          <Reminders
                            CoverImage={{
                              uri: `https://media.graphcms.com/${reminder.coverImage.handle}`
                            }}
                            title={reminder.title}
                            duration={reminder.duration}
                            author={reminder.author}
                            BlurImage={{
                              uri: `https://media.graphcms.com/${reminder.blurImage.handle}`
                            }}
                          />
                        </TouchableOpacity>
                      ))}
                    </View>
                  );
                }}
              </Query>
            </View>
          </View>

          <Query query={postQuery} pollInterval={500}>
            {({ loading, error, data }) => {
              if (loading)
                return <ActivityIndicator size="small" color="#000" />;
              if (error) return <View style={styles.message}></View>;
              return (
                <CardsContainer>
                  <View
                    style={{ marginLeft: 15, marginBottom: 10, marginTop: 20 }}
                  >
                    <Text style={[styles.subCaption, { color: "#eee" }]}>
                      Categories
                    </Text>
                  </View>
                  {data.posts.map(post => (
                    <TouchableOpacity
                      activeOpacity={1}
                      key={post.slug}
                      onPress={() => {
                        this.props.navigation.push("mainPostScreen", {
                          screenPost: post
                        });
                      }}
                    >
                      <NewCard
                        title={post.title}
                        image={{
                          uri: `https://media.graphcms.com/${post.coverImage.handle}`
                        }}
                        blur={{
                          uri: `https://media.graphcms.com/${post.blurImage.handle}`
                        }}
                        subtitle={post.subTitle}
                        author={post.author.name}
                        dateAndTime={post.dateAndTime}
                        content={post.content}
                      />
                    </TouchableOpacity>
                  ))}
                </CardsContainer>
              );
            }}
          </Query>
          <Query query={postTwoQuery} pollInterval={500}>
            {({ loading, error, data }) => {
              if (loading)
                return <ActivityIndicator size="small" color="#000" />;
              if (error) return <View></View>;

              return (
                <View>
                  {data.sosts.map(sost => (
                    <TouchableOpacity
                      activeOpacity={1}
                      key={sost.slug}
                      onPress={() => {
                        this.props.navigation.push("mainPostScreen", {
                          screenPost: sost
                        });
                      }}
                    >
                      <SecondCard
                        image={{
                          uri: `https://media.graphcms.com/${sost.coverImage.handle}`
                        }}
                        blur={{
                          uri: `https://media.graphcms.com/${sost.blurImage.handle}`
                        }}
                        subtitle={sost.subTitle}
                        title={sost.title}
                        author={sost.author.name}
                        dateAndTime={sost.dateAndTime}
                        logo={{
                          uri: `https://media.graphcms.com/${sost.author.avatar.handle}`
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

export default Main;

const bColour = "#111112";
// "#0a0a0a";
const bTextColour = "#393e46";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bColour
  },
  titleBar: {
    width: "100%",
    paddingLeft: 5,
    paddingBottom: 5,
    marginTop: 10
    // borderBottomWidth: 0.3,
    // borderBottomColor: "#1c1c1e"
  },
  subCaption: {
    fontSize: 15,
    fontFamily: "mont-bold",
    color: bTextColour
  },
  message: {
    justifyContent: "center",
    alignItems: "center"
  },
  newsText: {
    paddingTop: 10,
    marginBottom: 7,
    fontFamily: "pt-serif",
    color: "#AEAEB2",
    width: 350,
    marginLeft: 15
  },
  newsView: {
    top: 10,
    bottom: 5,
    backgroundColor: "#0a0a0a"
  }
});

const CardsContainer = styled.View`
  flex: 1;
  padding-bottom: 5px;
`;

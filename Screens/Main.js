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
  Button
} from "react-native";
import gql from "graphql-tag";
import { Query, graphql } from "react-apollo";
import Card from "../components/Card";
import NewCard from "../components/Card/NewCard";
import { SecondCard } from "../components/Card/SecondCard";
import styled from "styled-components";
import Moment from "../components/Moment";
import Categories from "../components/Categories";
import Reminders from "../components/Reminders";
import LottieView from "lottie-react-native";
import firebase from "../components/Firebase";

const animation = require("../assets/animation/error.json");

class Main extends React.Component {
  static navigationOptions = {
    header: null
  };

  signOutUser = () => {
    firebase.auth().signOut();
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
          {/* 
          <Button title="signOut" onPress={this.signOutUser} /> */}

          <View style={{ marginLeft: 20 }}>
            <Text style={[styles.subCaption, { color: "#33FF7A" }]}>
              Daily news
            </Text>
          </View>
          <View
            style={{
              top: 5,
              marginLeft: 20,
              bottom: 5
            }}
          >
            <Text
              style={{
                fontFamily: "pt-serif",
                color: "#AEAEB2",
                width: 350
              }}
            >
              <Text>Hi {this.state.displayName}</Text> you have an assigment due
              in week 3, here are a couple of tips and tricks to help you
            </Text>
          </View>
          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Reminders
              logo={{
                uri:
                  "https://p15.f3.n0.cdn.getcloudapp.com/items/JruWlQvZ/composition-6.png?v=00cd303223ef89681b3f6e51662d36f4"
              }}
              title="How to reference your Article and aviod plaigariasm"
              subtitle="5 min read"
            />
            <Reminders
              logo={{
                uri:
                  "https://p15.f3.n0.cdn.getcloudapp.com/items/BluB4DD9/rae-tian-RVF0ngUujks-unsplash.jpg?v=dc8c4db300a4f1f35381e58a02ddd29f"
              }}
              title="24 ways to ace an your essay"
              subtitle="7 min read"
            />
          </View>

          <View style={{ marginLeft: 20, marginBottom: 10 }}>
            <Text style={[styles.subCaption, { color: "#eee" }]}>
              Categories
            </Text>
          </View>

          <NewCard
            title="A stronger marriage and a healtheir lifestyle"
            subtitle="beiu"
            author="Godwin"
            paragraph="If you are using link the library react-native-localize manually."
            image={{
              uri:
                "https://p15.f3.n0.cdn.getcloudapp.com/items/o0uDeQre/martin-katler-YZQe6sGM9IQ-unsplash.jpg?v=71c05bdbde1067438e0fa12bc9a3a4e7"
            }}
          />

          <SecondCard
            image={{
              uri:
                "https://p15.f3.n0.cdn.getcloudapp.com/items/BluBWLw4/jordan-whitfield-3cNc1U7nJcs-unsplash.jpg?v=03f873aee8f537881768c93023ee0668"
            }}
            subtitle="BEIU"
            title="Yesskirr"
            paragraph="10 millions, cocain white as Tee"
            logo={{
              uri:
                "https://f.v1.n0.cdn.getcloudapp.com/items/2I0E1m2n0520460J1U1J/beautiful-beauty-blouse-1036623.jpg"
            }}
          />
          {/* <NewCard
            title="Climate Change"
            subtitle="beiu"
            author="Alwxander"
            paragraph="If you manually."
            image={{
              uri:
                "https://p15.f3.n0.cdn.getcloudapp.com/items/GGuNWAOr/the-honest-company-oqmIM9bkAWQ-unsplash.jpg?v=a4f04221a47ea679cec4cbe13de8498e"
            }}
          /> */}

          <Query query={postsQuery} pollInterval={500}>
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
                <CardsContainer>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={[styles.subCaption, { color: "#222831" }]}>
                      Categories
                    </Text>
                  </View>
                  <View
                    style={{ height: 130, marginTop: 10, marginBottom: 15 }}
                  >
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      <Categories
                        imageUri={{
                          uri:
                            "https://p15.f3.n0.cdn.getcloudapp.com/items/eDuxzeQY/meditating.png?v=4f3a6f057ffc632b2676ce80d40f3e06"
                        }}
                        name="Godwin"
                        color="#00adb5"
                      />
                      <Categories
                        imageUri={{
                          uri:
                            "https://p15.f3.n0.cdn.getcloudapp.com/items/2NuBkWg6/open-doodles-reading.png?v=fc5154b1ff996730877f73b833cfd34a"
                        }}
                        name="How to get away with murder haha"
                        color="#5f85db"
                      />
                      <Categories
                        imageUri={{
                          uri:
                            "https://p15.f3.n0.cdn.getcloudapp.com/items/WnuN1XRW/doodle+resiex.png?v=bde0f2011d2f74a6520b7d123e4f2273"
                        }}
                        name="Just submit your assigmnet man"
                        color="#927fbf"
                      />
                    </ScrollView>
                  </View>

                  <View style={{ marginLeft: 20 }}>
                    <Text style={[styles.subCaption, { color: "#3282b8" }]}>
                      Recommended for you
                    </Text>
                  </View>
                  {data.posts.map(post => (
                    <TouchableOpacity
                      key={post.slug}
                      onPress={() => {
                        this.props.navigation.push("mainPostScreen", {
                          screenPost: post
                        });
                      }}
                    >
                      <Card
                        title={post.title}
                        logo={{
                          uri: `https://media.graphcms.com/${post.authorsImage.handle}`
                        }}
                        image={{
                          uri: `https://media.graphcms.com/${post.coverImage.handle}`
                        }}
                        blur={{
                          uri: `https://media.graphcms.com/${post.blurImage.handle}`
                        }}
                        name={post.name}
                        caption={post.tags}
                        dateAndTime={post.dateAndTime}
                        content={post.content}
                        // thumbnailColor={post.thumbnailColor.hex}
                      />
                    </TouchableOpacity>
                  ))}
                </CardsContainer>
              );
            }}
          </Query>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const postsQuery = gql`
  query posts {
    posts(orderBy: dateAndTime_DESC) {
      id
      slug
      blurImage {
        id
        handle
      }
      content {
        html
      }
      title
      tags
      dateAndTime
      coverImage {
        id
        handle
      }
      thumbnailColor {
        hex
      }
      authorsImage {
        id
        handle
      }
      name
    }
    postsConnection {
      aggregate {
        count
      }
    }
  }
`;

export default Main;

const bColour = "#0a0a0a";
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
    marginBottom: 10
    // borderBottomWidth: 0.3,
    // borderBottomColor: "#A4B0BD"
  },
  subCaption: {
    fontSize: 15,
    fontFamily: "mont-bold",
    color: bTextColour
  },
  message: {
    justifyContent: "center",
    alignItems: "center"
  }
});

const CardsContainer = styled.View`
  flex: 1;
  padding-bottom: 5px;
`;

import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar
} from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import NewCard from "./NewCard";
import styled from "styled-components";

import LottieView from "lottie-react-native";

const animation = require("../../assets/animation/error.json");

class Main extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
        >
          <View style={{ marginLeft: 20 }}>
            <Text style={[styles.subCaption, { color: "#33FF7A" }]}>
              Daily news
            </Text>
          </View>

          <Query query={NewPostQuery} pollInterval={500}>
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
                      <NewCard
                        title={post.title}
                        image={{
                          uri: `https://media.graphcms.com/${post.coverImage.handle}`
                        }}
                        blur={{
                          uri: `https://media.graphcms.com/${post.blurImage.handle}`
                        }}
                        subtitle={post.subTitle}
                        author={post.author}
                        dateAndTime={post.dateAndTime}
                        content={post.content}
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

const NewPostQuery = gql`
  query posts {
    posts(orderBy: dateAndTime_DESC) {
      id
      slug
      title
      tags
      subTitle
      dateAndTime
      author {
        id
        avatar {
          id
          handle
        }
      }
      coverImage {
        id
        handle
      }
      blurImage {
        id
        handle
      }
      content {
        html
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

{
  /* <View
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
                  </View> */
}

{
  /* <View style={{ marginLeft: 20 }}>
                    <Text style={[styles.subCaption, { color: "#3282b8" }]}>
                      Recommended for you
                    </Text>
                  </View> */
}

// const postsQuery = gql`
//   query posts {
//     posts(orderBy: dateAndTime_DESC) {
//       id
//       slug
//       blurImage {
//         id
//         handle
//       }
//       content {
//         html
//       }
//       title
//       tags
//       dateAndTime
//       coverImage {
//         id
//         handle
//       }
//       thumbnailColor {
//         hex
//       }
//       authorsImage {
//         id
//         handle
//       }
//       name
//     }
//     postsConnection {
//       aggregate {
//         count
//       }
//     }
//   }
// `;

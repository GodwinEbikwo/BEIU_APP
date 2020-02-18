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
import { Query, graphql } from "react-apollo";
import Card from "../components/Card";
import styled from "styled-components";
import Moment from "../components/Moment";
import Categories from "../components/Categories";

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
          <View style={styles.titleBar}>
            <Moment />
          </View>

          <Query query={postsQuery}>
            {({ loading, error, data }) => {
              if (loading)
                return <ActivityIndicator size="small" color="#64ffda" />;
              if (error)
                return (
                  <Message>
                    <Text>
                      Ooppss!!! 😅 An error occured, refresh the page or close
                      the app and repoen it to start working again
                    </Text>
                  </Message>
                );
              return (
                <CardsContainer>
                  <View style={{ marginLeft: 20 }}>
                    <Text style={styles.subCaption}>Categories</Text>
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
                      <Categories
                        imageUri={{
                          uri:
                            "https://p15.f3.n0.cdn.getcloudapp.com/items/eDuxzeQY/meditating.png?v=4f3a6f057ffc632b2676ce80d40f3e06"
                        }}
                        name="Godwin"
                        color="#00adb5"
                      />
                    </ScrollView>
                  </View>

                  <View style={{ marginLeft: 20 }}>
                    <Text style={styles.subCaption}>Must Reads</Text>
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
                        thumbnailColor={post.thumbnailColor.hex}
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17223B"
  },
  titleBar: {
    width: "100%",
    paddingLeft: 5,
    paddingBottom: 5,
    marginBottom: 10
  },
  subCaption: {
    fontSize: 15,
    fontFamily: "mont-bold",
    color: "#f3f4ff"
  }
});

const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;
const CardsContainer = styled.View`
  flex: 1;
  padding-bottom: 5px;
`;

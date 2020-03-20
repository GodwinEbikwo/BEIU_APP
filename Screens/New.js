import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Image,
  Dimensions,
  Button,
  FlatList
} from "react-native";
import { Query, graphql } from "react-apollo";
import gql from "graphql-tag";
import Card from "../components/Card";

export default class New extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Query query={postsQuery} pollInterval={500}>
          {({ loading, error, data, refetch, networkStatus, fetchMore }) => {
            if (networkStatus === 4) return "Refetching!";
            if (loading) return <ActivityIndicator size="small" color="#fff" />;
            if (error)
              return (
                <Message>
                  Error fetching posts, try restarting the application
                </Message>
              );

            return (
              <FlatList
                data={data.posts}
                keyExtractor={item => item.email}
                onRefresh={() => data.refetch()}
                onEndReached={() => {
                  data.fetchMore({
                    variables: {
                      offset: data.posts.length
                    },
                    updateQuery: (prev, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      return Object.assign({}, prev, {
                        feed: [...prev.posts, ...fetchMoreResult.posts]
                      });
                    }
                  });
                }}
                renderItem={({ item }) => (
                  <TouchableOpacity>
                    <View style={{ flex: 1 }}>
                      <Card
                        title={item.title}
                        logo={{
                          uri: `https://media.graphcms.com/${item.authorsImage.handle}`
                        }}
                        image={{
                          uri: `https://media.graphcms.com/${item.coverImage.handle}`
                        }}
                        blur={{
                          uri: `https://media.graphcms.com/${item.blurImage.handle}`
                        }}
                        name={item.name}
                        caption={item.tags}
                        dateAndTime={item.dateAndTime}
                        content={item.content}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              />
            );
          }}
        </Query>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

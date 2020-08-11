import React, { useContext, useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Query } from "react-apollo";
import NewCard from "../components/Card/NewCard";
import Reminders from "../components/Reminders";
import LottieView from "lottie-react-native";
import { postQuery, reminderQuery } from "../components/Query";
import { AuthContext } from "../navigator/AuthProvider";
import { useStatusBar } from "../utils/Hook";
import Notification from "../components/Notification";
import { useScrollToTop } from "@react-navigation/native";
import { Transition, Transitioning } from "react-native-reanimated";
import firebase from "../config/Firebase";
const animation = require("../../assets/animation/error.json");
const bColour = "#111112";
const bTextColour = "#393e46";
const BOLD = "DM-Bold";
const REGULAR = "DM-Medium";

function HomeScreen({ navigation }) {
  const ref = React.useRef(null);
  const { user } = useContext(AuthContext);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const reference = React.useRef();
  useStatusBar("light-content");
  useScrollToTop(ref);
  navigation.setOptions({
    headerRight: () => (
      <Notification onPress={() => navigation.navigate("Settings")} />
    ),
  });
  const transition = (
    <Transition.Together>
      <Transition.In type="fade" durationMs={1100} interpolation="easeInOut" />
    </Transition.Together>
  );
  useEffect(() => {
    reference.current.animateNextTransition();
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection("first-years")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const data = doc.data();
        console.log("first", data);
        setFirst(data);
      });
  }, []);

  useEffect(() => {
    firebase
      .firestore()
      .collection("second-year")
      .doc(user.uid)
      .get()
      .then((doc) => {
        const data = doc.data();
        console.log("second", data);
        setSecond(data);
      });
  }, []);

  return (
    <Transitioning.View
      transition={transition}
      ref={reference}
      style={styles.container}
    >
      <ScrollView ref={ref} contentContainerStyle={styles.scrollContainer}>
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
                    {/* <Text style={styles.newsText}>
                      {first ? (
                        <Text>
                          Hi {first.username} you have an assigment due in week
                          3, here are a couple of tips and tricks to help you
                        </Text>
                      ) : (
                        <Text>
                          Hi you have an assigment due in week 3, here are a
                          couple of tips and tricks to help you
                        </Text>
                      )}
                    </Text> */}
                    <Text style={styles.newsText}>
                      {first && first ? (
                        <Text>
                          Hi {first.username} {first.message}
                        </Text>
                      ) : (
                        <Text></Text>
                      )}
                      {second && second ? (
                        <Text>
                          {` Hi ${second.username} you have an assigment due in week 3, here are a couple of tips and tricks to help you`}
                        </Text>
                      ) : (
                        <Text></Text>
                      )}
                    </Text>
                    {data.reminders.map((reminder) => (
                      <TouchableOpacity
                        key={reminder.slug}
                        onPress={() => {
                          navigation.navigate("Document", {
                            screenPost: reminder,
                          });
                        }}
                      >
                        <Reminders
                          CoverImage={{
                            uri: `https://media.graphcms.com/${reminder.coverImage.handle}`,
                          }}
                          title={reminder.title}
                          duration={reminder.duration}
                          author={reminder.author}
                          BlurImage={{
                            uri: `https://media.graphcms.com/${reminder.blurImage.handle}`,
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
            if (loading) return <ActivityIndicator size="small" color="#000" />;
            if (error) return <View style={styles.message}></View>;
            return (
              <View style={{ flex: 1, paddingBottom: 5 }}>
                <View
                  style={{ marginLeft: 15, marginBottom: 10, marginTop: 20 }}
                >
                  <Text style={[styles.subCaption, { color: "#eee" }]}>
                    Categories
                  </Text>
                </View>
                {data.posts.map((post) => (
                  <TouchableOpacity
                    key={post.slug}
                    onPress={() => {
                      navigation.navigate("Post", {
                        screenPost: post,
                      });
                    }}
                  >
                    <NewCard
                      title={post.title}
                      image={{
                        uri: `https://media.graphcms.com/${post.coverImage.handle}`,
                      }}
                      blur={{
                        uri: `https://media.graphcms.com/${post.blurImage.handle}`,
                      }}
                      subtitle={post.subTitle}
                      author={post.author.name}
                      dateAndTime={post.dateAndTime}
                      content={post.content}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            );
          }}
        </Query>
      </ScrollView>
    </Transitioning.View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bColour,
  },
  titleBar: {
    marginTop: -5,
  },
  subCaption: {
    fontSize: 15,
    fontFamily: BOLD,
    color: bTextColour,
  },
  message: {
    justifyContent: "center",
    alignItems: "center",
  },
  newsText: {
    paddingTop: 10,
    marginBottom: 7,
    fontFamily: REGULAR,
    color: "#AEAEB2",
    width: 350,
    marginLeft: 15,
  },
  newsView: {
    top: 10,
    bottom: 5,
    backgroundColor: "#0a0a0a",
  },
  scrollContainer: {
    marginBottom: 50,
  },
});

import React from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Platform
} from "react-native";
import HTMLView from "react-native-htmlview";
import ProgressiveImage from "../components/ProgressiveImage";
const w = Dimensions.get("window");
const boldText = "poppins-Bold";
const normalText = "poppins-Light";
import { Ionicons } from "@expo/vector-icons";

class Post extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    const screenPost = navigation.getParam("screenPost");
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <ProgressiveImage
              thumbnailSource={{
                uri: `https://media.graphcms.com/${screenPost.blurImage.handle}`
              }}
              source={{
                uri: `https://media.graphcms.com/${screenPost.coverImage.handle}`
              }}
              style={styles.image}
              alt={screenPost.title}
            />
            <Text style={styles.title}>{screenPost.title}</Text>
          </View>

          <View
            style={{
              borderBottomWidth: 0.2,
              borderTopWidth: 0.2,
              borderColor: "#e6f1ff"
            }}
          >
            <View style={styles.avatarView}>
              <Text style={styles.subtitle}>Created by {screenPost.name}</Text>
              <Image
                style={styles.avatar}
                source={{
                  uri: `https://media.graphcms.com/${screenPost.coverImage.handle}`
                }}
              />
            </View>
          </View>

          <View style={styles.webView}>
            <HTMLView
              stylesheet={htmlStyles}
              value={"<p>" + screenPost.content.html + "</p>"}
              addLineBreaks={false}
            />
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{ position: "absolute", top: 45, left: 15 }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <View style={styles.closeView}>
            <Ionicons
              name={
                Platform.OS === "ios"
                  ? "ios-arrow-round-back"
                  : "ios-arrow-round-back"
              }
              color="#000"
              size={Platform.OS === "ios" ? 34 : 36}
              style={{
                marginTop: Platform.OS === "ios" ? -2 : 0
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "400",
    padding: 10,
    fontFamily: boldText,
    color: "#e6f1ff"
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    padding: 16,
    fontFamily: normalText,
    color: "#64ffda"
  },
  image: {
    width: "100%",
    height: 325
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  avatarView: {
    flexDirection: "row",
    alignItems: "center",
    height: 60
  },
  container: {
    flex: 1,
    backgroundColor: "#0a192f"
  },
  webView: {},
  closeView: {
    width: 32,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    justifyContent: "center",
    alignItems: "center"
  },
  photo: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 65
  }
});

const htmlStyles = StyleSheet.create({
  p: {
    paddingTop: 5,
    fontSize: 15,
    paddingLeft: 16,
    lineHeight: 24,
    paddingRight: 5,
    fontFamily: normalText,
    color: "#fff",
    lineHeight: 30
  },
  a: {
    color: "#64ffda",
    fontWeight: "300",
    textDecorationLine: "underline"
  },
  img: {
    width: "50%"
  }
});

const htmlContent = `
  <h2>This is a title</h2>
  <p>This <strong>is</strong> a <a href="http://designcode.io">link</a></p>
  <img src="https://cl.ly/c0b07504bfec/download/background4.jpg" />
`;

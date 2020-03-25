import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Platform
} from "react-native";
import HTMLView from "react-native-htmlview";
import ProgressiveImage from "../components/ProgressiveImage";
const w = Dimensions.get("window");
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#1C1C1E" }}
        >
          <View style={styles.cover}>
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
            <Text style={styles.tag}>{screenPost.tags}</Text>
            <Text style={styles.title}>{screenPost.title}</Text>
          </View>

          <View style={styles.webView}>
            <HTMLView
              stylesheet={htmlStyles}
              value={"<p>" + screenPost.content.html + "</p>"}
              addLineBreaks={false}
            />
          </View>

          <TouchableOpacity
            style={{ position: "absolute", top: 45, right: 15 }}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <View style={styles.closeView}>
              <Ionicons
                name={Platform.OS === "ios" ? "ios-close" : "md-close"}
                color="#000"
                size={Platform.OS === "ios" ? 34 : 22}
                style={{
                  marginTop: Platform.OS === "ios" ? -2 : 0
                }}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

export default Post;
const boldText = "mont-bold";
const normalText = "pt-serif";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1C1E"
  },
  cover: {
    height: 525,
    width: "100%"
  },
  tag: {
    fontSize: 14,
    fontWeight: "400",
    padding: 10,
    fontFamily: normalText,
    color: "#efe",
    width: 150,
    position: "absolute",
    top: 38,
    left: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    padding: 10,
    fontFamily: boldText,
    color: "#fff",
    width: 270,
    position: "absolute",
    top: 62,
    left: 10
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    padding: 16,
    fontFamily: normalText,
    color: "#060508"
  },
  image: {
    width: "100%",
    height: "100%"
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
  }
});

const htmlStyles = StyleSheet.create({
  p: {
    paddingTop: 5,
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 5,
    color: "#AEAEB2",
    lineHeight: 30,
    fontWeight: "500",
    backgroundColor: "#111112"
  },
  a: {
    color: "#1db954",
    fontWeight: "300",
    textDecorationLine: "underline"
  },
  img: {
    width: "50%"
  }
});

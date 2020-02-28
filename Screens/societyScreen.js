import React from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Platform,
  StatusBar,
  Image
} from "react-native";
import HTMLView from "react-native-htmlview";
import ProgressiveImage from "../components/ProgressiveImage";
const w = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import Photos from "../components/Photos";

class societyScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    const screenSociety = navigation.getParam("screenSociety");
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#fff" }}
        >
          <StatusBar hidden />
          <View style={styles.cover}>
            <ProgressiveImage
              // thumbnailSource={{
              //   uri: `https://media.graphcms.com/${screenSociety.blurImage.handle}`
              // }}
              source={{
                uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`
              }}
              style={styles.image}
            />
            <Text style={styles.tag}>{screenSociety.tags}</Text>
            <Text style={styles.title}>{screenSociety.title}</Text>
          </View>
          <View style={styles.avatarView}>
            <Text style={styles.subtitle}>
              Created by {""}
              <Text
                style={{
                  color: "#74B9FF",
                  fontSize: 16,
                  fontFamily: boldText
                }}
              >
                {screenSociety.name}
              </Text>
            </Text>
            <Image
              style={styles.avatar}
              source={{
                uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`
              }}
            />
          </View>
          <View style={styles.webView}>
            <HTMLView
              stylesheet={htmlStyles}
              value={"<p>" + screenSociety.content.html + "</p>"}
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
                name={
                  Platform.OS === "ios" ? "ios-close" : "ios-arrow-round-back"
                }
                color="#000"
                size={Platform.OS === "ios" ? 34 : 36}
                style={{
                  marginTop: Platform.OS === "ios" ? -2 : 0
                }}
              />
            </View>
          </TouchableOpacity>
          <ScrollView
            style={{
              flexDirection: "row"
            }}
            horizontal={true}
            indicatorStyle={"white"}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.photos}>
              <TouchableOpacity>
                <Photos
                  image={{
                    uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`
                  }}
                />
              </TouchableOpacity>
              <Photos
                image={{
                  uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`
                }}
              />
              <Photos
                image={{
                  uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`
                }}
              />
              <Photos
                image={{
                  uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`
                }}
              />
              <Photos
                image={{
                  uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`
                }}
              />
              <Photos
                image={{
                  uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`
                }}
              />
            </View>
          </ScrollView>
        </ScrollView>
      </View>
    );
  }
}

export default societyScreen;
const boldText = "mont-bold";
const normalText = "pt-serif";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  cover: {
    height: 525,
    width: "100%",
    backgroundColor: "#93b5b3"
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
    color: "#000",
    width: 270,
    position: "absolute",
    top: 62,
    left: 10
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  avatarView: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderColor: "#393e46",
    borderBottomWidth: 0.2
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    padding: 16,
    fontFamily: normalText,
    color: "#222831"
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
  },
  photo: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 65
  },
  photos: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: 65,
    flexDirection: "row"
  }
});

const htmlStyles = StyleSheet.create({
  p: {
    paddingTop: 2,
    fontSize: 16,
    paddingLeft: 16,
    lineHeight: 24,
    paddingRight: 5,
    fontFamily: normalText,
    color: "#060508",
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

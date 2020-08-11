import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import HTMLView from "react-native-htmlview";
import ProgressiveImage from "../components/ProgressiveImage";
const w = Dimensions.get("window");
import FontAwesome from "react-native-vector-icons/Ionicons";
import Photos from "../components/Photos";
import { ScrollView } from "../ScrollContext";
import Header from "../Header";
import { styles as headerStyles } from "../Header/styles";
import { Text } from "../Text";

function societyScreen({ navigation, route }) {
  const { screenSociety } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={screenSociety.title}
        headerLeft={
          <Text
            style={headerStyles.headerText}
            onPress={() => navigation.goBack()}
            primaryColor
            heading
          >
            <FontAwesome name="md-arrow-back" size={15} /> Back
          </Text>
        }
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cover}>
          <ProgressiveImage
            source={{
              uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`,
            }}
            style={styles.image}
          />

          <Text style={styles.title}>{screenSociety.title}</Text>
        </View>
        <View style={styles.avatarView}>
          <Text style={styles.subtitle}>
            President{" "}
            <Text
              style={{
                color: "#74B9FF",
                fontSize: 16,
                fontFamily: boldText,
              }}
            >
              {screenSociety.name}
            </Text>
          </Text>
          <Image
            style={styles.avatar}
            source={{
              uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`,
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
        <ScrollView
          style={{
            flexDirection: "row",
          }}
          horizontal={true}
          indicatorStyle={"white"}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.photos}>
            <TouchableOpacity>
              <Photos
                image={{
                  uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`,
                }}
              />
            </TouchableOpacity>
            <Photos
              image={{
                uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`,
              }}
            />
            <Photos
              image={{
                uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`,
              }}
            />
            <Photos
              image={{
                uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`,
              }}
            />
            <Photos
              image={{
                uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`,
              }}
            />
            <Photos
              image={{
                uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`,
              }}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

export default societyScreen;
const boldText = "DM-Bold";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111112",
  },
  cover: {
    height: 425,
    width: "100%",
    backgroundColor: "#242426",
  },

  title: {
    fontSize: 20,
    fontWeight: "500",
    padding: 10,
    fontFamily: boldText,
    color: "#fff",
    width: 270,
    position: "absolute",
    left: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  avatarView: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderColor: "#393e46",
    borderBottomWidth: 0.2,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "500",
    padding: 16,
    color: "#fff",
  },
  closeView: {
    width: 32,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2.62,
    justifyContent: "center",
    alignItems: "center",
  },
  photo: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 65,
  },
  photos: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: 65,
    flexDirection: "row",
  },
});

const htmlStyles = StyleSheet.create({
  p: {
    paddingTop: 2,
    fontSize: 16,
    paddingLeft: 16,
    lineHeight: 25,
    paddingRight: 5,
    fontWeight: "500",
    color: "#AEAEB2",
    backgroundColor: "#111112",
  },
  a: {
    color: "#64ffda",
    fontWeight: "300",
    textDecorationLine: "underline",
  },
  img: {
    width: "50%",
  },
});

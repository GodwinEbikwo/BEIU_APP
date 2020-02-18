import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from "react-native";
const { height, width } = Dimensions.get("window");
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../components/Button";
import { SendMessage } from "../components/SendMessage";
import HTMLView from "react-native-htmlview";
const normalText = "poppins-Light";
const boldText = "poppins-Bold";
import Photos from "../components/Photos";

class societyScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigation } = this.props;
    const screenSociety = navigation.getParam("screenSociety");
    // const modal = [];

    // const renderButtons = links => {
    //   return links.map((link, i) => (
    //     <Button key={i} onPress={() => modal[i].openModal()} name={link} />
    //   ));
    // };
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={{
                uri: `https://media.graphcms.com/${screenSociety.imageOne.handle}`
              }}
              style={styles.image}
              alt={screenSociety.title}
            />
            <Text style={styles.title}>{screenSociety.title}</Text>
          </View>
          <View
            style={{
              borderBottomWidth: 0.2,
              borderTopWidth: 0.2,
              borderColor: "#e6f1ff"
            }}
          >
            <View style={styles.avatarView}>
              <Text style={styles.subtitle}>
                Created by {""}
                <Text style={{ color: "#74B9FF", fontSize: 16 }}>
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
          </View>

          <View style={styles.webView}>
            <HTMLView
              stylesheet={htmlStyles}
              value={"<p>" + screenSociety.content.html + "</p>"}
              addLineBreaks={false}
            />
          </View>
          <Text style={styles.title}>Photos</Text>

          <ScrollView
            style={{
              flexDirection: "row"
            }}
            horizontal={true}
            indicatorStyle={"white"}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.photo}>
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
          {/* 
          {renderButtons(["send us a message"])}

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "blue"
            }}
          >
            <SendMessage
              ref={el => {
                modal[0] = el;
              }}
            />
          </View> */}
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
                marginTop: Platform.OS === "ios" ? -2 : -2,
                marginLeft: 5
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default societyScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "400",
    padding: 10,
    fontFamily: boldText,
    color: "#e6f1ff"
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    padding: 16,
    fontFamily: normalText,
    color: "#fff"
  },
  image: {
    width: "100%",
    height: 375,
    backgroundColor: "#415B85"
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
    backgroundColor: "#151C1F"
  },
  closeView: {
    width: 32,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 16
  },
  photo: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: 65,
    flexDirection: "row"
  }
});

const htmlStyles = StyleSheet.create({
  p: {
    paddingTop: 5,
    fontSize: 16,
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

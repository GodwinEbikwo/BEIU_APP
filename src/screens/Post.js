import * as React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { COLORS } from "../components/Colors";
import HTMLView from "react-native-htmlview";
import { useScrollToTop } from "@react-navigation/native";
import ProgressiveImage from "../components/ProgressiveImage";
import { timeDifferenceForDate } from "../utils/Time";

const Post = ({ route, ...rest }) => {
  const { screenPost } = route.params;
  const ref = React.useRef(null);
  useScrollToTop(ref);
  return (
    <ScrollView
      ref={ref}
      style={{ backgroundColor: COLORS.bColor }}
      contentContainerStyle={styles.content}
      {...rest}
    >
      <View style={styles.author}>
        <Image
          style={styles.avatar}
          source={{
            uri: `https://media.graphcms.com/${screenPost.author.avatar.handle}`,
          }}
        />
        <View style={styles.meta}>
          <Text style={[styles.name, { color: COLORS.textColor }]}>
            Created by {screenPost.author.name}
          </Text>
          <Text style={[styles.timestamp, { color: COLORS.smallTextColor }]}>
            {timeDifferenceForDate(screenPost.dateAndTime)}
          </Text>
        </View>
      </View>
      <Text style={[styles.title, { color: COLORS.largeTextColor }]}>
        {screenPost.title}
      </Text>
      <ProgressiveImage
        thumbnailSource={{
          uri: `https://media.graphcms.com/${screenPost.blurImage.handle}`,
        }}
        source={{
          uri: `https://media.graphcms.com/${screenPost.coverImage.handle}`,
        }}
        style={styles.image}
      />
      <View style={styles.webView}>
        <HTMLView
          stylesheet={htmlStyles}
          value={"<p>" + screenPost.content.html + "</p>"}
          addLineBreaks={false}
        />
      </View>
    </ScrollView>
  );
};

export default Post;

const styles = StyleSheet.create({
  content: {
    paddingVertical: 16,
    backgroundColor: COLORS.bColor,
  },
  author: {
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 16,
  },
  meta: {
    marginHorizontal: 8,
    justifyContent: "center",
  },
  name: {
    fontFamily: "DM-Medium",
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    fontSize: 14,
    lineHeight: 21,
    fontFamily: "DM-Medium",
  },
  avatar: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  title: {
    fontFamily: "DM-Bold",
    fontSize: 30,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    // marginVertical: 8,
  },
});

const htmlStyles = StyleSheet.create({
  p: {
    paddingTop: 5,
    fontSize: 16,
    paddingLeft: 16,
    paddingRight: 5,
    color: COLORS.textColor,
    lineHeight: 30,
    fontFamily: "DM-Medium",
    backgroundColor: COLORS.bColor,
  },
  a: {
    color: "#1db954",
    fontWeight: "300",
    textDecorationLine: "underline",
  },
  img: {
    width: "50%",
  },
});

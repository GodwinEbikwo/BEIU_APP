import { StyleSheet, Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get("window");

const bold = "mont-bold";

const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "ios" ? null : 16,
    marginBottom: 50,
    backgroundColor: "#111112"
  },
  title: {
    paddingTop: 0,
    marginBottom: 12,
    textAlign: "left",
    width: "100%",
    fontSize: 24,
    fontWeight: "bold",
    color: "#E5E5EA",
    fontFamily: Platform.OS === "ios" ? bold : null
  },
  authorInfo: {
    marginLeft: 5,
    color: "grey",
    fontSize: 13,
    fontWeight: "bold"
  },
  subtitle: {
    color: "#1db954"
  },
  paragraph: {
    marginVertical: 10,
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 21,
    color: "#AEAEB2"
  },
  image: {
    width: "100%",
    height: height / 4.5
  },
  avatarImage: { width: 25, height: 25, borderRadius: width / 2 },
  duration: { color: "grey" },
  authorView: {
    marginHorizontal: 10,
    paddingTop: 5,
    width: "100%",
    marginBottom: 10
  },
  imageSource: { color: "#C7C7CC", textDecorationLine: "underline" }
});

export default styles;

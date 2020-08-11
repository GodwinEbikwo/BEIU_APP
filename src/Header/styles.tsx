import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",
    marginTop: Platform.OS === "ios" ? 0 : 40,
    height: 52,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#111112",
    shadowRadius: 0,
    shadowColor: "#2c2c2e",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    zIndex: 9,
  },
  headerTitle: {
    display: "flex",
    flexBasis: "33%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  headerLeft: {
    flexBasis: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
  },
  headerRight: {
    flexBasis: "33%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    color: "#fff",
  },
  headerText: {
    textAlign: "center",
    paddingHorizontal: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    fontSize: 17,
    fontWeight: "600",
  },
});

export default styles;

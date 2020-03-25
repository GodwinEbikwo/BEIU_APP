import React from "react";
import { Video } from "expo-av";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Dimensions, StyleSheet, View } from "react-native";

const { height, width } = Dimensions.get("window");

class VideoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={{
            uri:
              "https://player.vimeo.com/external/281472837.hd.mp4?s=c78b611b5055e373c69b6dd7674e2051128bc7b8&profile_id=175"
          }}
          shouldPlay
          useNativeControls={true}
          resizeMode="cover"
          style={{ width: width, ...StyleSheet.absoluteFillObject }}
        />
        <View style={styles.closeView}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{ padding: 20 }}
          >
            <Ionicons name="ios-close" size={44} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
    alignItems: "center",
    justifyContent: "center"
  },
  closeView: {
    position: "absolute",
    top: 0,
    right: 12
  }
});

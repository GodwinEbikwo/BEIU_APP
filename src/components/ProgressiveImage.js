import React from "react";
import { View, StyleSheet, Animated } from "react-native";

const styles = StyleSheet.create({
  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  },
  container: {
    backgroundColor: "#1c1c1e"
  }
});

class ProgressiveImage extends React.Component {
  thumbnailAnimated = new Animated.Value(0);
  imageAnimated = new Animated.Value(0);

  handleThumbnailLoad = () => {
    Animated.timing(this.thumbnailAnimated, {
      toValue: 1
    }).start();
  };

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1
    }).start();
  };

  render() {
    const {
      thumbnailColor,
      thumbnailSource,
      source,
      style,
      ...props
    } = this.props;

    return (
      <View style={styles.container}>
        <Animated.Image
          {...props}
          source={thumbnailSource}
          style={[
            style,
            {
              backgroundColor: thumbnailColor || "#d4d7dd"
            },
            { opacity: this.thumbnailAnimated }
          ]}
          onLoad={this.handleThumbnailLoad}
          blurRadius={5}
        />
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

export default ProgressiveImage;

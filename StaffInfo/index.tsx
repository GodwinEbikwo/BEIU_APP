import * as React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import Content from "./Content";
import Cover from "./Cover";

class StaffInfo extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Cover cover={require("../assets/images/AnotherPicture.jpg")} />
          <Content />
        </ScrollView>
      </View>
    );
  }
}

export default StaffInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111112"
  }
});

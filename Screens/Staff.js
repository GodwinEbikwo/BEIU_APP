import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
  Modal,
  SafeAreaView
} from "react-native";
import ProgressiveImage from "../components/ProgressiveImage";
import { Icon } from "react-native-elements";
import Header from "../Header";
import { Text } from "../Text";
import { Linking } from "expo";
import { ScrollView } from "../ScrollContext";
import { BlurView } from "expo-blur";
const screen = Dimensions.get("window");

const ModalText = props => {
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
      <View style={{ marginTop: 5 }}>
        <Icon name={props.name} type={props.type} size={18} color="grey" />
      </View>

      <Text style={styles.modalItemText}>{props.modalItem}</Text>
    </View>
  );
};

class Staff extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    modalVisible: false
  };

  toogleContactPage() {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  _handlePress = () => {
    Linking.openURL("https://wa.me/447405042014");
  };

  render() {
    const { navigation } = this.props;
    const screenPost = navigation.getParam("screenPost");
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title={`${screenPost.name.first} ${screenPost.name.last}`}
          headerLeft={
            <View style={styles.headerLeftView}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon
                  name="arrow-left"
                  type="feather"
                  color="#fff"
                  size={24}
                  style={{
                    backgroundColor: "transparent"
                  }}
                />
              </TouchableOpacity>
            </View>
          }
          headerRight={
            <View style={styles.headerRightView}>
              <TouchableOpacity onPress={() => this.toogleContactPage()}>
                <Icon
                  name="more-horizontal"
                  type="feather"
                  color="#fff"
                  size={24}
                  style={{
                    backgroundColor: "transparent"
                  }}
                />
              </TouchableOpacity>
            </View>
          }
        />

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={{ marginTop: Platform.OS === "ios" ? null : -15 }}>
            <Text style={styles.tag}>BEIU</Text>
            <Text style={styles.title}>
              {`${screenPost.name.first} ${screenPost.name.last}`}
            </Text>
          </View>
          <View style={styles.cover}>
            <ProgressiveImage
              source={{
                uri: screenPost.picture.large
              }}
              style={styles.image}
              alt={screenPost.title}
            />
          </View>

          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            auctor nisl ut sapien blandit congue. Donec vehicula nulla augue, ac
            pretium justo malesuada eget. Donec placerat, nulla in convallis
            consectetur, est erat ornare ex, non lobortis augue risus eu lectus.
            Curabitur egestas ut magna vitae vehicula. Quisque non semper felis.
            Cras dictum nisl sed magna tempus lobortis. Nunc arcu ligula,
            dignissim nec tincidunt vel, eleifend et est. Vulputate. Aenean
            augue eros, viverra egestas tristique at, aliquam et lacus. Etiam
            suscipit varius ligula, at tempus lectus pellentesque ac. Donec
            maximus euismod velit ultrices imperdiet. Suspendisse sem tellus,
            accumsan quis faucibus sed, tempus id urna. Phasellus id mauris
            aliquam, elementum mi eu, vestibulum nisl. Sed quis fringilla lorem.
          </Text>

          <Modal
            animationType="slide"
            transparent={Platform.OS === "ios" ? true : false}
            visible={this.state.modalVisible}
            onRequestClose={() => this.toogleContactPage()}
          >
            <BlurView
              tint="dark"
              intensity={100}
              style={{
                flex: 1
              }}
            >
              <View
                style={{
                  flex: 1,
                  backgroundColor: Platform.OS === "ios" ? null : "#111112"
                }}
              >
                <View style={styles.imageView}>
                  <Image
                    source={{
                      uri: screenPost.picture.large
                    }}
                    style={{ width: 200, height: 200, borderRadius: 5 }}
                  />
                </View>
                <View
                  style={{ marginHorizontal: screen.width / 4, marginTop: -5 }}
                >
                  <Text style={styles.politeText}>Say hello &</Text>
                  <Text style={styles.politeText}>
                    Don't forget to be polite
                  </Text>
                </View>

                <View style={styles.staffNameView}>
                  <Text style={styles.staffName}>
                    Contact {`${screenPost.name.first} ${screenPost.name.last}`}
                  </Text>

                  <TouchableOpacity onPress={this._handlePress}>
                    <View style={styles.panelButton}>
                      <ModalText
                        name="whatsapp"
                        type="font-awesome"
                        modalItem="WhatsApp"
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      Linking.openURL(`mailto:${screenPost.email}`)
                    }
                  >
                    <View style={styles.panelButton}>
                      <ModalText name="mail" type="feather" modalItem="Email" />
                    </View>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => this.toogleContactPage()}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: screen.width / 7
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize: 15
                      }}
                    >
                      Close
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </BlurView>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Staff;
const boldText = "mont-bold";
const normalText = "pt-serif";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111112"
  },
  scrollContainer: {
    alignContent: "flex-start",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingHorizontal: 10,
    paddingTop: Platform.OS === "ios" ? null : 16,
    marginBottom: 50,
    backgroundColor: "#111112"
  },
  cover: {
    height: 375,
    marginTop: Platform.OS === "ios" ? 60 : 45,
    width: "100%"
  },
  tag: {
    fontSize: 14,
    fontWeight: "400",
    padding: 10,
    fontFamily: normalText,
    color: "#efe",
    width: 150,
    position: "absolute"
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    padding: 10,
    fontFamily: boldText,
    color: "#fff",
    width: 270,
    position: "absolute",
    top: 15
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    padding: 16,
    fontFamily: normalText,
    color: "#060508"
  },
  headerLeftView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    left: 12,
    marginBottom: 5
  },
  headerRightView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    right: 12,
    marginBottom: 5
  },
  image: {
    width: "100%",
    height: "100%"
  },
  imageView: {
    flex: 1,
    justifyContent: "center",
    marginTop: screen.height / 3,
    marginHorizontal: screen.width / 4
  },
  politeText: {
    textAlign: "center",
    color: "#AEAEB2",
    fontWeight: "400",
    fontFamily: boldText,
    top: 5,
    fontSize: 12
  },
  staffNameView: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom:
      Platform.OS === "ios" ? screen.height / 13 : screen.height / 15
  },
  staffName: {
    marginHorizontal: 17,
    padding: 20,
    fontFamily: boldText,
    fontSize: 23,
    color: "#fff"
  },
  panelButton: {
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#2C2C2E",
    marginVertical: 5
  },
  modalItemText: {
    color: "#e3e3e3",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "mont-regular",
    marginHorizontal: 7,
    marginTop: 5
  },
  paragraph: {
    marginVertical: 5,
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    color: "#AEAEB2",
    padding: 5
  }
});

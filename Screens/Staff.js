import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Platform,
  Modal
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button, Item } from "native-base";
import { Icon } from "react-native-elements";
import BottomSheet from "reanimated-bottom-sheet";
import Swiper from "react-native-swiper";
import { Linking } from "expo";
import { BlurView } from "expo-blur";

class Staff extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _handlePress = () => {
    Linking.openURL("https://wa.me/447405042014");
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked(index) {
    this.setState({
      activeIndex: index
    });
  }

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5
          }}
        >
          <Text style={styles.renderSection}>
            In the midst of the most serious financial upheaval since the Great
            Depression, legendary financier George Soros explores the origins of
            the crisis and its implications for the future. Soros, whose breadth
            of experience in financial markets is unrivaled, places the current
            crisis in the context of decades of study of how individuals and
            institutions handle the boom and bust cycles that now dominate
            global economic activity. “This is the worst financial crisis since
            the 1930s,” In this special edition of the classic investment book,
            The Alchemy of Finance, George Soros presents a theoretical and
            practical account of current financial trends and a new paradigm by
            which to understand the financial market today. This edition's
            expanded and revised Introduction details Soros's innovative
            investment practices along with his views of the world and world
            order. George Soros compares and contrasts open and closed societies
            and illustrates the superiority of the open society system. He
            offers solutions for the then crumbling Soviet Empire to integrate
            into the free world. George Soros has done more for open societies
            than any other private citizen in the world. In Underwriting
            Democracy he describes his experiences helping to bring about
            democratic change in Eastern Europe—experiences that are especially
            relevant now that our country has begun to intervene (though in an
            entirely different way than Soros) to create functioning
            democracies.
          </Text>
        </View>
      );
    }
  };

  render() {
    const { navigation } = this.props;
    const screenPost = navigation.getParam("screenPost");
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Swiper
            height={480}
            horizontal={false}
            dotColor="#606470"
            activeDotColor="#fff"
          >
            <View style={styles.cover}>
              <Image
                source={{
                  uri: screenPost.picture.large,
                  cache: "only-if-cached"
                }}
                style={styles.image}
              />

              <Text style={styles.caption}>BEIU</Text>
              <Text
                style={styles.title}
              >{`${screenPost.name.first} ${screenPost.name.last}`}</Text>
            </View>
            <View style={styles.cover}>
              <Image
                source={{
                  uri:
                    "http://f.cl.ly/items/1N1l130d1e333E1z3T3G/NigerianSociety3.jpg"
                }}
                style={styles.image}
              />
            </View>
          </Swiper>

          <View>
            <View style={styles.tabs}>
              <Button
                onPress={() => this.segmentClicked(0)}
                transparent
                active={this.state.activeIndex == 0}
              >
                <Text
                  style={[
                    {
                      fontSize: 18,
                      color: "white",
                      fontFamily: normalText
                    },
                    this.state.activeIndex == 0 ? {} : { color: "grey" }
                  ]}
                >
                  About
                </Text>
              </Button>
            </View>
            {this.renderSection()}
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{
              position: "absolute",
              top: Platform.OS === "ios" ? 47 : 36,
              left: 8
            }}
          >
            <View style={styles.closeView}>
              <Ionicons
                name="md-arrow-back"
                size={24}
                color="#000"
                style={{ marginTop: 2 }}
              />
            </View>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
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
                  justifyContent: "center",
                  marginTop: screen.height / 4,
                  marginHorizontal: screen.width / 4
                }}
              >
                <Image
                  source={{
                    uri:
                      "http://f.cl.ly/items/1N1l130d1e333E1z3T3G/NigerianSociety3.jpg"
                  }}
                  style={{ width: 200, height: 200 }}
                />
              </View>
              <View style={{ marginHorizontal: screen.width / 5 }}>
                <Text
                  style={{
                    color: "#AEAEB2",
                    fontFamily: "mont-regular",
                    width: 350
                  }}
                >
                  Say hi 👋, don't forget to be polite 😁
                </Text>
              </View>

              <View
                style={{
                  flex: 1,
                  justifyContent: "flex-end",
                  marginBottom: screen.height / 4.6
                }}
              >
                <Text
                  style={{
                    marginHorizontal: 17,
                    padding: 20,
                    fontFamily: normalText,
                    fontSize: 23,
                    color: "#fff"
                  }}
                >
                  Contact {`${screenPost.name.first} ${screenPost.name.last}`}
                </Text>

                <TouchableOpacity onPress={this._handlePress}>
                  <View style={styles.panelButton}>
                    <ModalText name="phone-call" modalItem="WhatsApp" />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => Linking.openURL(`mailto:${screenPost.email}`)}
                >
                  <View style={styles.panelButton}>
                    <ModalText name="mail" modalItem="Email" />
                  </View>
                </TouchableOpacity>
              </View>
            </BlurView>
            <TouchableOpacity
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}
              style={styles.topButton}
            >
              <View>
                <Icon
                  name="x"
                  type="feather"
                  color="#fff"
                  size={24}
                  style={{
                    backgroundColor: "transparent"
                  }}
                />
              </View>
            </TouchableOpacity>
          </Modal>

          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(true);
            }}
            style={{
              position: "absolute",
              top: Platform.OS === "ios" ? 47 : 36,
              right: 8
            }}
          >
            <View style={styles.closeView}>
              <Icon
                name="more-horizontal"
                type="feather"
                color="#000"
                size={24}
                style={{
                  backgroundColor: "transparent"
                }}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const ModalText = props => {
  return (
    <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
      <View style={{ marginTop: 5 }}>
        <Icon name={props.name} type="feather" size={18} color="#1db954" />
      </View>

      <Text style={styles.modalItemText}>{props.modalItem}</Text>
    </View>
  );
};

export default Staff;
const screen = Dimensions.get("window");
const normalText = "mont-bold";
const smallText = "pt-serif";
const styles = StyleSheet.create({
  cover: {
    flex: 1,
    position: "relative",
    backgroundColor: "#f4f4f4"
  },
  container: {
    backgroundColor: "#1C1C1E"
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  title: {
    fontSize: 24,
    color: "#f1f3f4",
    fontWeight: "bold",
    width: 250,
    position: "absolute",
    top: Platform.OS === "ios" ? 100 : 95,
    left: 12,
    fontFamily: normalText
  },
  caption: {
    fontSize: 14,
    color: "#f1f3f4",
    fontWeight: "bold",
    position: "absolute",
    top: Platform.OS === "ios" ? 85 : 75,
    left: 12,
    fontFamily: smallText
  },
  closeView: {
    width: 32,
    height: 32,
    backgroundColor: "#f4f4f4",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6
  },
  bottomSheetView: {
    width: 42,
    height: 26,
    borderRadius: 4,
    backgroundColor: "#f1f3f4",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: "#eae5e5",
    padding: 4,
    backgroundColor: "#2C2C2E",
    borderRadius: 65,
    width: "50%",
    marginHorizontal: screen.width / 4,
    marginTop: -30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7
    },
    shadowOpacity: 0.16,
    shadowRadius: 9.11,
    elevation: 30
  },
  renderSection: {
    color: "#fff",
    fontFamily: smallText,
    padding: 16,
    lineHeight: 28,
    fontSize: 16
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    color: "#f3f4f5"
  },
  panelSubtitle: {
    fontSize: 14,
    color: "#AEAEB2",
    height: 30,
    marginBottom: 10,
    fontFamily: smallText
  },
  panelButton: {
    padding: 15,
    // borderRadius: 10,
    // backgroundColor: "#2C2C2E",
    // alignItems: "center",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#2C2C2E",
    marginVertical: 5
  },
  topButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 50 : 40,
    right: 10,
    backgroundColor: "#2C2C2E",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20
  },
  modalItemText: {
    color: "#e3e3e3",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "mont-regular",
    marginHorizontal: 7,
    marginTop: 5
  }
});

import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  Platform
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
const normalText = "mont-bold";
const smallText = "pt-serif";
import BottomSheet from "reanimated-bottom-sheet";
import Swiper from "react-native-swiper";

class Staff extends React.Component {
  static navigationOptions = {
    header: null
  };

  renderInner = () => (
    <View style={styles.panel}>
      <Text style={[styles.panelTitle, { fontFamily: normalText }]}>
        San Francisco Airport
      </Text>
      <Text style={styles.panelSubtitle}>
        International Airport - 40 miles away
      </Text>
      <View style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Directions</Text>
      </View>
      <View style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Search Nearby</Text>
      </View>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

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
    if (this.state.activeIndex == 1) {
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
            This is an informal research into the various ways and methods other
            universities in the United Kingdom go about marketing their
            entrepreneurship course to prospective students. We would compare
            different attributes such as language and visuals used in the
            marketing process. In this brilliant and spirited book, Soros brings
            together a vital collection of his writings, some never previously
            published. They deal with a wide range of important and timely
            topics: the dangers that the instruments of control produced by
            artificial intelligence and machine learning pose to open societies;
            what Soros calls his “political philanthropy”; his founding of the
            Central European University, one of the world’s foremost defender of
            academic freedom; his philosophy; his boom/bust theory of financial
            markets and its policy implications; and what he calls the tragedy
            of the European Union. Soros’s forceful affirmation of freedom,
            democracy, the rule of law, human rights, social justice, and social
            responsibility as a universal idea is a clarion call-to-arms for the
            ideals of open society.
          </Text>
        </View>
      );
    }
  };

  bs = React.createRef();

  render() {
    const { navigation } = this.props;
    const screenPost = navigation.getParam("screenPost");
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={this.bs}
          snapPoints={[500, 0, 0]}
          renderContent={this.renderInner}
          renderHeader={this.renderHeader}
          initialSnap={1}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Swiper
            height={480}
            horizontal={false}
            dotColor="#606470"
            activeDotColor="#fff"
          >
            <View style={styles.cover}>
              <Image
                source={{ uri: screenPost.picture.large }}
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

          <View style={{}}>
            <View style={styles.tabs}>
              <Button
                onPress={() => this.segmentClicked(0)}
                transparent
                active={this.state.activeIndex == 0}
                style={[
                  this.state.activeIndex == 0
                    ? {
                        borderBottomColor: "#FFF",
                        borderBottomWidth: 2
                      }
                    : { color: "grey" }
                ]}
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

              <Button
                onPress={() => this.segmentClicked(1)}
                transparent
                active={this.state.activeIndex == 1}
                style={[
                  this.state.activeIndex == 1
                    ? {
                        borderBottomColor: "#FFF",
                        borderBottomWidth: 2
                      }
                    : { color: "grey" }
                ]}
              >
                <Text
                  style={[
                    { fontSize: 18, color: "white", fontFamily: normalText },
                    this.state.activeIndex == 1 ? {} : { color: "grey" }
                  ]}
                >
                  Contact
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
              top: Platform.OS === "ios" ? 37 : 26,
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
          <TouchableOpacity
            onPress={() => this.bs.current.snapTo(0)}
            style={{
              position: "absolute",
              top: Platform.OS === "ios" ? 40 : 30,
              right: 10
            }}
          >
            <View style={styles.bottomSheetView}>
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

const deviceWidth = Dimensions.get("window").width;

export default Staff;

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    position: "relative",
    backgroundColor: "#f4f4f4"
  },
  container: {
    backgroundColor: "#f4f4f6"
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
    top: Platform.OS === "ios" ? 90 : 80,
    left: 12,
    fontFamily: normalText
  },
  caption: {
    fontSize: 14,
    color: "#f1f3f4",
    fontWeight: "bold",
    position: "absolute",
    top: Platform.OS === "ios" ? 75 : 66,
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
    backgroundColor: "#212121",
    borderRadius: 65,
    width: "60%",
    marginHorizontal: deviceWidth / 5,
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
    color: "#000",
    fontFamily: smallText,
    padding: 16,
    lineHeight: 28,
    fontSize: 16
  },
  panelContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  panel: {
    height: 600,
    padding: 20,
    backgroundColor: "#fff4e3"
  },
  header: {
    backgroundColor: "#fff4e3",
    shadowColor: "#000000",
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  panelHeader: {
    alignItems: "center"
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#17223b",
    marginBottom: 10
  },
  panelTitle: {
    fontSize: 27,
    height: 35
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
    fontFamily: smallText
  },
  panelButton: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#17223b",
    alignItems: "center",
    marginVertical: 10
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    fontFamily: normalText
  }
});

import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "native-base";
const normalText = "poppins-Bold";
const smallText = "poppins-Light";

class Staff extends React.Component {
  static navigationOptions = {
    header: null
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
            The London Times writes: "They're wrong about oil, by George: In
            short, the standard economic assumption that supply and demand drive
            prices is only a starting point for understanding financial markets.
            In boom-bust cycles, the textbook theory is not just slightly
            inaccurate but totally wrong. This is the main argument made by
            George Soros in his fascinating book on the credit crunch, "The New
            Paradigm for Financial Markets," launched at an LSE lecture last
            night."
          </Text>
        </View>
      );
    } else if (this.state.activeIndex == 2) {
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

  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#0a192f" }}
      >
        <View style={styles.container}>
          <View style={styles.cover}>
            <Image
              source={{
                uri:
                  "https://p15.f3.n0.cdn.getcloudapp.com/items/BluEqLZx/eastwood-done.png?v=e52b22a72ac7eec44f64a3c742e31b08"
              }}
              style={styles.image}
            />
            <Text style={styles.title}>Kristian mackie</Text>
          </View>

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
                        borderBottomWidth: 1
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
                        borderBottomWidth: 1
                      }
                    : { color: "grey" }
                ]}
              >
                <Text
                  style={[
                    {
                      fontSize: 18,
                      color: "white",
                      fontFamily: normalText,
                      borderTopColor: "pink"
                    },
                    this.state.activeIndex == 1 ? {} : { color: "grey" }
                  ]}
                >
                  Articles
                </Text>
              </Button>
              <Button
                onPress={() => this.segmentClicked(2)}
                transparent
                active={this.state.activeIndex == 2}
                style={[
                  this.state.activeIndex == 2
                    ? {
                        borderBottomColor: "#FFF",
                        borderBottomWidth: 1
                      }
                    : { color: "grey" }
                ]}
              >
                <Text
                  style={[
                    { fontSize: 18, color: "white", fontFamily: normalText },
                    this.state.activeIndex == 2 ? {} : { color: "grey" }
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
            style={{ position: "absolute", top: 40, left: 18 }}
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
        </View>
      </ScrollView>
    );
  }
}

export default Staff;

const styles = StyleSheet.create({
  cover: {
    height: 405,
    position: "relative",
    backgroundColor: "#0A79DF",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  container: {
    flex: 1,
    backgroundColor: "#0a192f"
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute"
  },
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    width: 170,
    position: "absolute",
    top: 78,
    left: 20,
    fontFamily: normalText
  },
  caption: {
    color: "white",
    fontSize: 17,
    position: "absolute",
    bottom: 20,
    left: 20,
    width: 300
  },
  closeView: {
    width: 32,
    height: 32,
    backgroundColor: "white",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center"
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: "#eae5e5",
    padding: 6,
    backgroundColor: "black",
    marginTop: 15,
    borderRadius: 65,
    width: "90%",
    marginLeft: 19,
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
    padding: 10,
    lineHeight: 25,
    fontSize: 16
  }
});

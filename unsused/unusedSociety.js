import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Platform,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import { Query, graphql } from "react-apollo";
import { LinearGradient } from "expo-linear-gradient";
import gql from "graphql-tag";
import styled from "styled-components/native";
import SocietiesComponent from "../components/SocietiesComponent";
const boldText = "poppins-Bold";

class Society extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={["#01CBC6", "transparent"]}
          start={[0.2, -0.8]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 300
          }}
        />
        <View style={styles.titleBar}>
          <Text style={styles.title}>Discover</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Query query={sostsQuery}>
            {({ loading, error, data }) => {
              if (loading)
                return <ActivityIndicator size="small" color="#64ffda" />;
              if (error)
                return (
                  <Message>
                    Error fetching posts, try restarting the application
                  </Message>
                );
              return (
                <FlatList
                  data={data.societies}
                  renderItem={({ item }) => (
                    <View style={styles.largeCards}>
                      <TouchableOpacity
                        key={item.slug}
                        onPress={() => {
                          this.props.navigation.push("societyScreen", {
                            screenSociety: item
                          });
                        }}
                      >
                        <SocietiesComponent
                          subtext={item.title}
                          code={item.color.hex}
                          shadow={item.color.hex}
                          image={{
                            uri: `https://media.graphcms.com/${item.imageOne.handle}`
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                  keyExtractor={item => item.slug}
                />

                // <View style={styles.largeCards}>
                //   {data.societies.map(society => (
                //     <TouchableOpacity
                //       key={society.slug}
                //       onPress={() => {
                //         this.props.navigation.push("societyScreen", {
                //           screenSociety: society
                //         });
                //       }}
                //     >
                //       <SocietiesComponent
                //         subtext={society.title}
                //         code={society.color.hex}
                //         shadow={society.color.hex}
                //         image={{
                //           uri: `https://media.graphcms.com/${society.imageOne.handle}`
                //         }}
                //       />
                //     </TouchableOpacity>
                //   ))}
                // </View>
              );
            }}
          </Query>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Society;

const sostsQuery = gql`
  query societys {
    societies {
      id
      slug
      title
      name
      content {
        html
      }
      color {
        hex
      }
      imageOne {
        id
        handle
      }
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  titleBar: {
    width: "100%",
    paddingLeft: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    borderColor: "#535C68",
    marginTop: 35
  },
  largeCards: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "stretch",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 30,
    fontWeight: Platform.OS === "ios" ? "700" : "400",
    color: "#fff",
    marginLeft: 8,
    fontFamily: boldText
  }
});

const Message = styled.Text`
  margin: 20px;
  color: #b8bece;
  font-size: 15px;
  font-weight: 500;
`;
const CardsContainer = styled.View`
  flex: 1;
`;

//CARD

// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Platform,
//   TouchableOpacity
// } from "react-native";
// import ProgressiveImage from "./ProgressiveImage";
// import AsyncImage from "./AsyncImage";
// import { timeDifferenceForDate } from "./Time";
// import { Ionicons } from "@expo/vector-icons";

// const Card = props => (
//   <View style={[styles.wrapper, { backgroundColor: props.thumbnailColor }]}>
//     <View style={{ alignSelf: "flex-end", marginRight: 15, marginTop: 10 }}>
//       <TouchableOpacity>
//         <Ionicons
//           name="md-bookmark"
//           color="white"
//           size={29}
//           style={{ backgroundColor: "transparent" }}
//         />
//       </TouchableOpacity>
//     </View>

//     <View style={{ marginLeft: 15, marginTop: -30 }}>
//       <View style={{ marginBottom: 3 }}>
//         <TouchableOpacity>
//           <Text style={styles.caption}>{props.caption}</Text>
//         </TouchableOpacity>
//       </View>

//       <Text numberOfLines={2} ellipsizeMode="tail" style={styles.title}>
//         {props.title}
//       </Text>

//       <ProgressiveImage style={styles.image} source={props.image} />
//     </View>

//     <View style={styles.avatarView}>
//       <AsyncImage style={styles.avatar} source={props.logo} />
//       <View style={styles.cover}>
//         <Text style={styles.subCaption}>
//           Created by {props.name}{" "}
//           <Text
//             style={{
//               color: "#74B9FF",
//               fontFamily: "pt-serif",
//               fontSize: 12.5
//             }}
//           >
//             {timeDifferenceForDate(props.dateAndTime)}
//           </Text>
//         </Text>
//       </View>
//     </View>
//   </View>
// );

// export default Card;
// const BackColor = "#253B6E";
// const textColor = "#DDE3E9";
// const normalText = "mont-regular";
// const andriodText = "poppins-Regular";

// const styles = StyleSheet.create({
//   wrapper: {
//     width: "92%",
//     marginBottom: 15,
//     marginLeft: 18,
//     borderRadius: 5
//   },
//   image: {
//     width: "60%",
//     height: 275,
//     resizeMode: "contain",
//     marginLeft: 50
//   },
//   title: {
//     fontSize: Platform.OS === "ios" ? 17 : 15,
//     fontWeight: "400",
//     // paddingTop: 8,
//     // paddingBottom: 16,
//     width: 268,
//     position: "relative",
//     color: "#FFF",
//     lineHeight: 23,
//     // paddingLeft: 16,
//     fontFamily: Platform.OS === "ios" ? "mont-bold" : andriodText
//   },
//   showMoreWrapper: {
//     width: "100%"
//   },
//   loadmore: {
//     marginTop: -12.5,
//     width: 37,
//     height: 37,
//     backgroundColor: textColor,
//     borderRadius: 37 / 2,
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: textColor,
//     shadowOffset: {
//       width: 0,
//       height: 6
//     },
//     shadowOpacity: 0.37,
//     shadowRadius: 7.49
//   },
//   avatarView: {
//     flexDirection: "row",
//     alignItems: "center",
//     height: 63,
//     paddingLeft: 14,
//     backgroundColor: BackColor,
//     borderBottomLeftRadius: 5,
//     borderBottomRightRadius: 5
//   },
//   avatar: {
//     width: 44,
//     height: 44,
//     borderRadius: 22
//   },
//   cover: {
//     marginLeft: 10
//   },
//   caption: {
//     color: textColor,
//     fontSize: Platform.OS === "ios" ? 15 : 14,
//     fontWeight: "400",
//     fontFamily: Platform.OS === "ios" ? "pt-serif" : andriodText
//   },
//   subCaption: {
//     color: "#DDE3E9",
//     fontWeight: "400",
//     fontSize: Platform.OS === "ios" ? 14 : 14,
//     fontFamily: Platform.OS === "ios" ? normalText : andriodText,
//     paddingTop: 5
//   }
// });

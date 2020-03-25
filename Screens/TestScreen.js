import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Svg, { Image, Circle, ClipPath, G, Path, Defs } from "react-native-svg";
import styled from "styled-components";
import { Video } from "expo-av";
const { height, width } = Dimensions.get("window");

class TestScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#0a0a0a" }}>
        <View
          style={{
            ...StyleSheet.absoluteFill,
            backgroundColor: "blue"
          }}
        >
          <Svg height={height} width={width}>
            <ClipPath id="clip">
              <Circle r={height / 1.9} cx={width / 2} />
            </ClipPath>

            <Image
              href={require("../assets/images/AnotherPicture.jpg")}
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip)"
            />
          </Svg>

          <PlayWrapper>
            <TouchableOpacity
              underlayColor="transparent"
              onPress={() => {
                this.props.navigation.navigate("Video");
              }}
            >
              <PlayView>
                <PlayIcon style={{ marginLeft: -10 }} />
              </PlayView>
            </TouchableOpacity>
          </PlayWrapper>
        </View>
      </View>
    );
  }
}
export default TestScreen;

export const PlayIcon = props => (
  <Svg height={38.15} width={38.15} {...props}>
    <Path
      opacity={1}
      d="M8.153 14.585c-1.73-1.703-.825-4.649 1.563-5.087l19.148-3.516c2.072-.38 3.88 1.436 3.49 3.506L28.8 28.364c-.444 2.36-3.343 3.267-5.053 1.582L8.153 14.586z"
      fill="#33CEFF"
      transform="rotate(45 19.075 19.075)"
    />
  </Svg>
);

const styles = StyleSheet.create({});

const PlayWrapper = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -40px;
`;

const PlayView = styled.View`
  width: 80px;
  height: 80px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 40px;
  justify-content: center;
  align-items: center;
`;

<View
  style={{
    height: height / 2
  }}
>
  <PlayWrapper>
    <TouchableOpacity
      underlayColor="transparent"
      onPress={() => {
        this.props.navigation.navigate("Video");
      }}
    >
      <PlayView>
        <PlayIcon style={{ marginLeft: -10 }} />
      </PlayView>
    </TouchableOpacity>
  </PlayWrapper>
  <Svg height={height} width={width} clipPath="url(#clip)">
    <ClipPath id="clip">
      <Circle r={height / 2} cx={width / 2} />
    </ClipPath>

    <Image
      href={require("../assets/images/honestCompany.jpg")}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
      clipPath="url(#clip)"
      style={{ position: "absolute" }}
    />
  </Svg>
</View>;

// import React from "react";
// import {
//   TouchableOpacity,
//   View,
//   ScrollView,
//   StyleSheet,
//   Text,
//   Image,
//   Dimensions,
//   Platform,
//   TouchableHighlight,
//   Modal,
//   Button
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { Icon } from "react-native-elements";
// import Swiper from "react-native-swiper";
// import { Linking } from "expo";
// import { BlurView } from "expo-blur";

// class Staff extends React.Component {
//   static navigationOptions = {
//     header: null
//   };

//   state = {
//     modalVisible: false
//   };

//   toogleContactPage() {
//     this.setState({ modalVisible: !this.state.modalVisible });
//   }

//   _handlePress = () => {
//     Linking.openURL("https://wa.me/447405042014");
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       activeIndex: 0
//     };
//   }

//   renderSection = () => {
//     if (this.state.activeIndex == 0) {
//       return (
//         <View
//           style={{
//             flex: 1,
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: 5,
//             backgroundColor: "#111112"
//           }}
//         >
//           <Text style={styles.renderSection}>
//             In the midst of the most serious financial upheaval since the Great
//             Depression, legendary financier George Soros explores the origins of
//             the crisis and its implications for the future. Soros, whose breadth
//             of experience in financial markets is unrivaled, places the current
//             crisis in the context of decades of study of how individuals and
//             institutions handle the boom and bust cycles that now dominate
//             global economic activity. “This is the worst financial crisis since
//             the 1930s,” In this special edition of the classic investment book,
//             The Alchemy of Finance, George Soros presents a theoretical and
//             practical account of current financial trends and a new paradigm by
//             which to understand the financial market today. This edition's
//             expanded and revised Introduction details Soros's innovative
//             investment practices along with his views of the world and world
//             order. George Soros compares and contrasts open and closed societies

//           </Text>
//         </View>
//       );
//     }
//   };

//   render() {
//     const { navigation } = this.props;
//     const screenPost = navigation.getParam("screenPost");
//     return (
//       <View style={styles.container}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <Swiper
//             height={480}
//             horizontal={false}
//             dotColor="#606470"
//             activeDotColor="#fff"
//           >
//             <View style={styles.cover}>
//               <Image
//                 source={{
//                   uri: screenPost.picture.large,
//                   cache: "only-if-cached"
//                 }}
//                 style={styles.image}
//               />

//               <Text style={styles.caption}>BEIU</Text>
//               <Text
//                 style={styles.title}
//               >{`${screenPost.name.first} ${screenPost.name.last}`}</Text>
//             </View>
//             <View style={styles.cover}>
//               <Image
//                 source={{
//                   uri:
//                     "http://f.cl.ly/items/1N1l130d1e333E1z3T3G/NigerianSociety3.jpg"
//                 }}
//                 style={styles.image}
//               />
//             </View>
//           </Swiper>

//           <View>{this.renderSection()}</View>

//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={this.state.modalVisible}
//             onRequestClose={() => this.toogleContactPage()}
//           >
//             <View
//               style={{
//                 flex: 1,
//                 backgroundColor: "#111112"
//               }}
//             >
//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: "center",
//                   marginTop: screen.height / 4,
//                   marginHorizontal: screen.width / 4
//                 }}
//               >
//                 <Image
//                   source={{
//                     uri:
//                       "http://f.cl.ly/items/1N1l130d1e333E1z3T3G/NigerianSociety3.jpg"
//                   }}
//                   style={{ width: 200, height: 200 }}
//                 />
//               </View>
//               <View
//                 style={{ marginHorizontal: screen.width / 5, marginTop: -20 }}
//               >
//                 <Text
//                   style={{
//                     color: "#AEAEB2",
//                     fontWeight: "600",
//                     fontFamily: normalText,
//                     width: 350
//                   }}
//                 >
//                   Say hello, don't forget to be polite :)
//                 </Text>
//               </View>

//               <View
//                 style={{
//                   flex: 1,
//                   justifyContent: "flex-end",
//                   marginBottom:
//                     Platform.OS === "ios"
//                       ? screen.height / 13
//                       : screen.height / 15
//                 }}
//               >
//                 <Text
//                   style={{
//                     marginHorizontal: 17,
//                     padding: 20,
//                     fontFamily: normalText,
//                     fontSize: 23,
//                     color: "#fff"
//                   }}
//                 >
//                   Contact {`${screenPost.name.first} ${screenPost.name.last}`}
//                 </Text>

//                 <TouchableOpacity onPress={this._handlePress}>
//                   <View style={styles.panelButton}>
//                     <ModalText
//                       name="whatsapp"
//                       type="font-awesome"
//                       modalItem="WhatsApp"
//                     />
//                   </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => Linking.openURL(`mailto:${screenPost.email}`)}
//                 >
//                   <View style={styles.panelButton}>
//                     <ModalText name="mail" type="feather" modalItem="Email" />
//                   </View>
//                 </TouchableOpacity>
//               </View>

//               <TouchableOpacity onPress={() => this.toogleContactPage()}>
//                 <View
//                   style={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     marginBottom: screen.width / 7
//                   }}
//                 >
//                   <Text
//                     style={{
//                       color: "white",
//                       fontWeight: "500"
//                     }}
//                   >
//                     Close
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </Modal>
//         </ScrollView>
//         <TouchableOpacity
//           onPress={() => {
//             this.props.navigation.goBack();
//           }}
//           style={{
//             position: "absolute",
//             top: Platform.OS === "ios" ? 47 : 36,
//             left: 12
//           }}
//         >
//           <View style={styles.closeView}>
//             <Ionicons
//               name="md-arrow-back"
//               size={24}
//               color="#000"
//               style={{ marginTop: 2 }}
//             />
//           </View>
//         </TouchableOpacity>

//         <TouchableOpacity
//           onPress={() => this.toogleContactPage()}
//           style={{
//             position: "absolute",
//             top: Platform.OS === "ios" ? 47 : 36,
//             right: 8
//           }}
//         >
//           <View style={styles.closeView}>
//             <Icon
//               name="more-horizontal"
//               type="feather"
//               color="#000"
//               size={24}
//               style={{
//                 backgroundColor: "transparent"
//               }}
//             />
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const ModalText = props => {
//   return (
//     <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
//       <View style={{ marginTop: 5 }}>
//         <Icon name={props.name} type={props.type} size={18} color="#1db954" />
//       </View>

//       <Text style={styles.modalItemText}>{props.modalItem}</Text>
//     </View>
//   );
// };

// export default Staff;
// const screen = Dimensions.get("window");
// const normalText = "mont-bold";
// const smallText = "pt-serif";
// const styles = StyleSheet.create({
//   cover: {
//     flex: 1,
//     position: "relative",
//     backgroundColor: "#f4f4f4"
//   },
//   container: {
//     backgroundColor: "#111112"
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     position: "absolute"
//   },
//   title: {
//     fontSize: 24,
//     color: "#f1f3f4",
//     fontWeight: "bold",
//     width: 250,
//     position: "absolute",
//     top: Platform.OS === "ios" ? 100 : 95,
//     left: 12,
//     fontFamily: normalText
//   },
//   caption: {
//     fontSize: 14,
//     color: "#f1f3f4",
//     fontWeight: "bold",
//     position: "absolute",
//     top: Platform.OS === "ios" ? 85 : 75,
//     left: 12,
//     fontFamily: smallText
//   },
//   closeView: {
//     width: 32,
//     height: 32,
//     backgroundColor: "#f4f4f4",
//     borderRadius: 16,
//     justifyContent: "center",
//     alignItems: "center",
//     opacity: 0.6
//   },
//   renderSection: {
//     color: "#AEAEB2",
//     fontWeight: "500",
//     padding: 16,
//     lineHeight: 28,
//     fontSize: 16
//   },
//   panelTitle: {
//     fontSize: 27,
//     height: 35,
//     color: "#f3f4f5"
//   },
//   panelButton: {
//     padding: 15,
//     borderBottomWidth: StyleSheet.hairlineWidth,
//     borderColor: "#2C2C2E",
//     marginVertical: 5
//   },
//   topButton: {
//     position: "absolute",
//     top: Platform.OS === "ios" ? 50 : 40,
//     right: 10,
//     backgroundColor: "#2C2C2E",
//     width: 40,
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 20
//   },
//   modalItemText: {
//     color: "#e3e3e3",
//     fontSize: 14,
//     fontWeight: "400",
//     fontFamily: "mont-regular",
//     marginHorizontal: 7,
//     marginTop: 5
//   }
// });

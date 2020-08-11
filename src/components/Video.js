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
const { height, width } = Dimensions.get("window");

class Video extends React.Component {
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

          {/* <PlayWrapper>
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
          </PlayWrapper> */}
        </View>
      </View>
    );
  }
}
export default Video;

// export const PlayIcon = props => (
//   <Svg height={38.15} width={38.15} {...props}>
//     <Path
//       opacity={1}
//       d="M8.153 14.585c-1.73-1.703-.825-4.649 1.563-5.087l19.148-3.516c2.072-.38 3.88 1.436 3.49 3.506L28.8 28.364c-.444 2.36-3.343 3.267-5.053 1.582L8.153 14.586z"
//       fill="#33CEFF"
//       transform="rotate(45 19.075 19.075)"
//     />
//   </Svg>
// );

const styles = StyleSheet.create({});

// const PlayWrapper = styled.View`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   margin-top: -200px;
//   margin-left: -40px;
// `;

// const PlayView = styled.View`
//   width: 80px;
//   height: 80px;
//   background: rgba(0, 0, 0, 0.5);
//   border-radius: 40px;
//   justify-content: center;
//   align-items: center;
// `;

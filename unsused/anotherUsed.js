import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Platform,
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
                <View style={styles.largeCards}>
                  {data.societies.map(society => (
                    <TouchableOpacity
                      key={society.slug}
                      onPress={() => {
                        this.props.navigation.push("societyScreen", {
                          screenSociety: society
                        });
                      }}
                    >
                      <SocietiesComponent
                        subtext={society.title}
                        code={society.color.hex}
                        shadow={society.color.hex}
                        image={{
                          uri: `https://media.graphcms.com/${society.imageOne.handle}`
                        }}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
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
    alignItems: "center",
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

// import React, { Component } from "react";
// import { Text, StyleSheet, View, WebView } from "react-native";
// import StaffComponent from "../components/StaffComponent";
// import { LinearGradient } from "expo-linear-gradient";

// class StaffScreen extends React.Component {
//   static navigationOptions = {
//     header: null
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <LinearGradient
//           colors={["#1287A5", "transparent"]}
//           // start={[0.2, -0.8]}
//           style={{
//             position: "absolute",
//             left: 0,
//             right: 0,
//             top: 0,
//             height: 800
//           }}
//         >
//           <View style={styles.staff}>
//             <StaffComponent
//               image={{
//                 uri:
//                   "https://f.v1.n0.cdn.getcloudapp.com/items/2I0E1m2n0520460J1U1J/beautiful-beauty-blouse-1036623.jpg"
//               }}
//               title="Meet Katie"
//               logo={{
//                 uri:
//                   "https://p15.f3.n0.cdn.getcloudapp.com/items/BluEqLZx/eastwood-done.png?v=e52b22a72ac7eec44f64a3c742e31b08"
//               }}
//               caption="Boom Boom"
//               subtitle="Boom shakala"
//             />
//           </View>
//         </LinearGradient>
//       </View>
//     );
//   }
// }

// export default StaffScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000"
//   },
//   staff: {
//     marginTop: 30,
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });

import React from "react";
import { View, StatusBar, Platform } from "react-native";
import * as Font from "expo-font";

import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import TabBarNavigator from "./navigator/TabBarNavigator";

import { Asset } from "expo-asset";
import { AppLoading } from "expo";

// Replace this with your project's endpoint
const GRAPHCMS_API =
  "https://api-euwest.graphcms.com/v1/ck2awrnng1bb801glckxdb81w/master";

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
});

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
      loading: true
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([]);

    const fontAssets = Font.loadAsync({
      "poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
      "cardio-regular": require("./assets/fonts/Cardo-Regular.ttf"),
      "mont-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "mont-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
      "calibre-Regular": require("./assets/fonts/Calibre-Regular.ttf"),
      "SF-Mono_Regular": require("./assets/fonts/SFMono-Regular.ttf"),
      "SF-Mono-Medium": require("./assets/fonts/SFMono-Medium.ttf"),
      "calibre-Medium": require("./assets/fonts/Calibre-Medium.ttf"),
      "poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
      "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "Noto-Sans": require("./assets/fonts/NotoSansTC-Regular.otf"),
      "pt-serif": require("./assets/fonts/PTSerif-Regular.ttf")
    });

    await Promise.all([...imageAssets, fontAssets]);
  }
  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);

    if (Platform.OS == "android") StatusBar.setBarStyle("light-content", true);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <ApolloProvider client={client}>
        <TabBarNavigator />
      </ApolloProvider>
    );
  }
}

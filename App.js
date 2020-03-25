import React from "react";
import { StatusBar, Platform } from "react-native";
import * as Font from "expo-font";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import TabBarNavigator from "./navigator/TabBarNavigator";
import { ScrollContextProvider } from "./ScrollContext";

import { Asset } from "expo-asset";
import { AppLoading } from "expo";

const GRAPHCMS_API =
  "https://api-eu-central-1.graphcms.com/v2/ck7zz3z7d03us01zd3yc2ednj/master";

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
      "mont-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "mont-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
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
        <ScrollContextProvider>
          <TabBarNavigator />
        </ScrollContextProvider>
      </ApolloProvider>
    );
  }
}

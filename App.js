import React, { useState } from "react";
import * as Font from "expo-font";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { ScrollContextProvider } from "./src/ScrollContext";
import { AppLoading } from "expo";
import Application from "./src/Application";
import { NotifierWrapper } from "react-native-notifier";

const GRAPHCMS_API =
  "https://api-eu-central-1.graphcms.com/v2/ck7zz3z7d03us01zd3yc2ednj/master";

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
});

const fetchFonts = () => {
  return Font.loadAsync({
    "mont-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mont-regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "pt-serif": require("./assets/fonts/PTSerif-Regular.ttf"),
    "DM-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "DM-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "DM-Regular": require("./assets/fonts/DMSans-Regular.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <NotifierWrapper>
      <ScrollContextProvider>
        <ApolloProvider client={client}>
          <Application />
        </ApolloProvider>
      </ScrollContextProvider>
    </NotifierWrapper>
  );
}

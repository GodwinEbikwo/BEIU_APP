import React, { useState, useEffect, useCallback } from "react";
import { FlatList, View , Text} from "react-native";
import LazyImage from "../../../components/LazyImage";
import {
  Container,
  Post,
  Header,
  Avatar,
  Name,
  Description,
  Loading
} from "./styles";



export default function Feed() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [viewable, setViewable] = useState([]);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (pageNumber === total) return;
    if (loading) return;

    setLoading(true);

    const response = await fetch(
      `http://localhost:3000/feed?_expand=author&_limit=4&_page=${pageNumber}`
    );

    const totalItems = response.headers.get("X-Total-Count");
    const data = await response.json();

    setLoading(false);
    setTotal(Math.floor(totalItems / 4));
    setPage(pageNumber + 1);

    setFeed(shouldRefresh ? data : [...feed, ...data]);
  }

  async function refreshList() {
    setRefreshing(true);

    await loadPage(1, true);

    setRefreshing(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  const handleViewableChanged = useCallback(({ changed }) => {
    setViewable(changed.map(({ item }) => item.id));
  }, []);

  return (
    <View style={{flex:1}}>
      <FlatList
        data={feed}
        keyExtractor={post => String(post.id)}
        onViewableItemsChanged={handleViewableChanged}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 10
        }}
        showsVerticalScrollIndicator={false}
        onRefresh={refreshList}
        refreshing={refreshing}
        onEndReachedThreshold={0.1}
        onEndReached={() => loadPage()}
        ListFooterComponent={loading && <Loading />}
        renderItem={({ item }) => (
      

        )}
      />
    </View>
  );
}
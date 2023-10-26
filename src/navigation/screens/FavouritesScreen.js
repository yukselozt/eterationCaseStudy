import React from "react";
import { Text, FlatList, View, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import FavouriteItem from "../../components/FavouriteItem";
import NoElementForFlatList from "../../components/NoElementForFlatList";

export const FavouritesScreen = () => {
  const dispatch = useDispatch();
  const { GeneralResponse } = useSelector((state) => state);
  const favourites = GeneralResponse.favourites;
  console.log(favourites);
  return (
    <View style={styles.container}>
      <FlatList
        data={favourites}
        style={{ width: "100%" }}
        ListEmptyComponent={<NoElementForFlatList />}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <FavouriteItem product={item} />}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});

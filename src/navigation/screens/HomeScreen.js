import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ActivityIndicator,
  Button,
  FlatList,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IncrementAge } from "../../redux/action";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../../components/ProductCard";
import useApiData from "../../hooks/useApiData";
import { useEffect, useState } from "react";

export const HomeScreen = () => {
  // const dispatch = useDispatch();
  const Navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const { data, loading, error } = useApiData();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (text) => {
    setSearchText(text);
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <>
          <TextInput
            style={styles.searchBar}
            placeholder="Arama yap..."
            value={searchText}
            onChangeText={handleSearch}
          />
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            horizontal={false}
            numColumns={2}
            contentContainerStyle={{ alignItems: "center" }}
            renderItem={({ item }) => (
              <ProductCard
                product={item}
                onPress={() => Navigation.navigate("Details", { item })}
              />
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    height: 40,
    width: "90%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 8,
  },
});

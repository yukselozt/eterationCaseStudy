import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ActivityIndicator,
  Button,
  FlatList,
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

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          horizontal={false} // Yatayda sıralamayı devre dışı bırakın
          numColumns={2}
          renderItem={({ item }) => (
            <ProductCard
              product={item}
              onPress={() => Navigation.navigate("Details", { item })}
            />
          )}
        />
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
});

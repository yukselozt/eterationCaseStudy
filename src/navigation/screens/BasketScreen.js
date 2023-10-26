import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import BasketItem from "../../components/BasketItem";
import { useDispatch, useSelector } from "react-redux";
import NoElementForFlatList from "../../components/NoElementForFlatList";
import { loadCardItems } from "../../redux/storage";
import { useEffect } from "react";

export const BasketScreen = () => {
  const { GeneralResponse } = useSelector((state) => state);
  const products = GeneralResponse.basketItems;
  useEffect(() => {
    loadCardItems();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        ListEmptyComponent={<NoElementForFlatList />}
        style={{ maxWidth: "100%" }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BasketItem product={item} />}
      />
      <View style={styles.bottomContainer}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.price}>
          Total: {GeneralResponse.totalPrice} ₺
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Basket")}
        >
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    marginTop: 16,
    paddingBottom: 10,
    borderTopColor: "lightgray",
  },
  button: {
    width: "40%",
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import BasketItem from "../../components/BasketItem";

export const BasketScreen = () => {
  const products = [
    { id: 1, productName: "Product 1", count: 2 },
    { id: 2, productName: "Product 2", count: 1 },
    { id: 3, productName: "Product 3", count: 3 },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        style={{ maxWidth: "100%" }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BasketItem />}
      />
      <View style={styles.bottomContainer}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.price}>
          Toplam: 50000000 ₺
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

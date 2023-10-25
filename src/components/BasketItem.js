import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const BasketItem = ({ product, count, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
          {product}Aston Martin El Camino
        </Text>
        <Text style={styles.price}>{price}100 ₺</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          onPress={console.log("decrement")}
          style={styles.operatorButton}
        >
          <Text style={styles.operatorText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>1</Text>
        <TouchableOpacity
          onPress={console.log("increment")}
          style={styles.operatorButton}
        >
          <Text style={styles.operatorText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    width: "100%", // Ekranın tamamını kapla
  },
  left: {
    flex: 1,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "blue",
  },
  operatorButton: {
    backgroundColor: "lightgray",
    padding: 12,
    borderRadius: 16,
  },
  operatorText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  countText: {
    fontSize: 18,
    marginHorizontal: 16,
  },
});

export default BasketItem;
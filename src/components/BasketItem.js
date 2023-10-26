import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AddToBasket, SubtractToBasket } from "../redux/action";

const BasketItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
          {product.name}
        </Text>
        <Text style={styles.price}>{product.price} ₺</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity
          onPress={() => dispatch(SubtractToBasket(product))}
          style={styles.operatorButton}
        >
          <Text style={styles.operatorText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.countText}>{product.quantity}</Text>
        <TouchableOpacity
          onPress={() => dispatch(AddToBasket(product))}
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

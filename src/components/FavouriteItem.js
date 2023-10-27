import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { ToggleFavourites } from "../redux/action";

const FavouriteItem = ({ product }) => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      onPress={() => -Navigation.navigate("Details", { item: product })}
    >
      <View style={styles.container}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.productInfo}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.model}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(ToggleFavourites(product))}
          style={styles.heartIconContainer}
        >
          <Icon name="heart" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
  },
});

export default FavouriteItem;

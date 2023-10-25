import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // İkon setini seçin

const ProductCard = ({ product, onPress }) => {
  const [favori, setFavori] = useState(false); // Favori durumu için bir state kullanıyoruz

  const toggleFavori = () => {
    setFavori(!favori); // Favori durumunu tersine çevir
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <TouchableOpacity style={styles.favoriButton} onPress={toggleFavori}>
          <Icon name="heart" size={35} color={favori ? "red" : "gray"} />
        </TouchableOpacity>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.productPrice}>{product.price} ₺</Text>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.productName}>
          {product.name}
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Add to Chart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoriButton: {
    position: "absolute",
    zIndex: 40,
    top: 8,
    right: 8,
  },
  card: {
    width: 180,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    margin: 16,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 8,
    maxHeight: 40,
  },
  productPrice: {
    fontSize: 16,
    margin: 8,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});

export default ProductCard;

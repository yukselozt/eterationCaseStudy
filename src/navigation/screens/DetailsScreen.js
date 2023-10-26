import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { AddToBasket } from "../../redux/action";

export const DetailsScreen = ({ route }) => {
  const product = route.params.item;
  const dispatch = useDispatch();
  console.log(product);
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.resim} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.aciklama}>{product.description}</Text>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.fiyat}>Fiyat: {product.price} ₺</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(AddToBasket(product))}
        >
          <Text style={styles.buttonText}>Add to Chart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  resim: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 16,
  },
  aciklama: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 16,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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
  fiyat: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

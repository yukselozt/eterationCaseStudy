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
import { SetName } from "../../redux/action";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

export const BasketScreen = () => {
  const { t } = useTranslation();
  const { GeneralResponse } = useSelector((state) => state);
  const products = GeneralResponse.basketItems;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        ListEmptyComponent={<NoElementForFlatList />}
        style={{ maxWidth: "100%" }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BasketItem product={item} />}
      />
      <View style={styles.bottomContainer}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.price}>
          {t("total")}: {GeneralResponse.totalPrice} ₺
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            (async () => {
              await AsyncStorage.removeItem("basketItems");
              await AsyncStorage.removeItem("totalPrice");
            })();
          }}
        >
          <Text style={styles.buttonText}>{t("complete")}</Text>
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

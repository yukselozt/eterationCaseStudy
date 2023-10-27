import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NoElementForFlatList = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.noElement}>
      <Text style={styles.text}> {t("noElementForFlatList")} </Text>
      <Icon name="exclamation" size={80} color="#000" />
    </View>
  );
};
const styles = StyleSheet.create({
  noElement: {
    margin: 20,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default NoElementForFlatList;

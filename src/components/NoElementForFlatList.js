import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const NoElementForFlatList = () => {
  return (
    <View style={styles.noElement}>
      <Text style={styles.text}> Listede öğe bulunmuyor.</Text>
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

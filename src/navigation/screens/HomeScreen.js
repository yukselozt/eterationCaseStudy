import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { IncrementAge } from "../../redux/action";
import { useNavigation } from "@react-navigation/native";
import ProductCard from "../../components/ProductCard";
import useApiData from "../../hooks/useApiData";

export const HomeScreen = () => {
  // const dispatch = useDispatch();
  const Navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  const { data, loading, error } = useApiData();
  return (
    <View style={styles.container}>
      {/* <Text>
        Name : {GeneralResponse.name}
        Age: {GeneralResponse.age}
      </Text>
      <Button
        title="Go to Details"
        onPress={() => {
          //  dispatch(IncrementAge())
          Navigation.navigate("Details");
        }}
      /> */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal={false} // Yatayda sıralamayı devre dışı bırakın
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard
            productImage={item.image}
            productName={item.name}
            productPrice={item.price}
            onPress={() => console.log("Add")}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

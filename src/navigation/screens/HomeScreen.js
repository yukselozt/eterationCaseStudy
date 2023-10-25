import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, StyleSheet, Text, View } from "react-native";
import { IncrementAge } from "../../redux/action";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  // const dispatch = useDispatch();
  const Navigation = useNavigation();
  const { GeneralResponse } = useSelector((state) => state);
  return (
    <View>
      <Text>
        Name : {GeneralResponse.name}
        Age: {GeneralResponse.age}
      </Text>
      <Button
        title="Go to Details"
        onPress={() => {
          //  dispatch(IncrementAge())
          Navigation.navigate("Details");
        }}
      />
    </View>
  );
};

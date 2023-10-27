import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View, AppState } from "react-native";
import { Provider, useDispatch } from "react-redux";
import store from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigator } from "./src/navigation/BottomNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "./src/navigation/screens/DetailsScreen";

export default function App() {
  const { t } = useTranslation();
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="BottomNavigator"
            component={BottomNavigator}
          />
          <Stack.Screen name={t("details")} component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

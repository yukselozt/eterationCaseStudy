import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import reducers from "./src/redux"; // import ChangeLangButton from "./src/components/ChangeLangButton";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigator } from "./src/navigation/BottomNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailsScreen } from "./src/navigation/screens/DetailsScreen";

export default function App() {
  const { t } = useTranslation();
  const store = createStore(reducers);
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
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0ff",
    alignItems: "center",
    justifyContent: "center",
  },
});

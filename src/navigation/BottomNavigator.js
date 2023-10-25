import React from "react";
import { HomeScreen } from "./screens/HomeScreen";
import { BasketScreen } from "./screens/BasketScreen";
import { FavouritesScreen } from "./screens/FavouritesScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
export const BottomNavigator = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Basket" component={BasketScreen} />
      <Tabs.Screen name="Favourites" component={FavouritesScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

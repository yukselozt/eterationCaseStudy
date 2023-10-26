import React from "react";
import { HomeScreen } from "./screens/HomeScreen";
import { BasketScreen } from "./screens/BasketScreen";
import { FavouritesScreen } from "./screens/FavouritesScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome"; // İkon setini seçin
import { useSelector } from "react-redux";

export const BottomNavigator = () => {
  const Tabs = createBottomTabNavigator();
  const { GeneralResponse } = useSelector((state) => state);

  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Basket"
        component={BasketScreen}
        options={{
          tabBarBadge: GeneralResponse.basketItems.length,
          tabBarBadgeStyle:
            GeneralResponse.basketItems.length === 0 ? { display: "none" } : {},
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={35} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

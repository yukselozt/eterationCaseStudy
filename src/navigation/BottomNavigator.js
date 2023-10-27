import React from "react";
import { HomeScreen } from "./screens/HomeScreen";
import { BasketScreen } from "./screens/BasketScreen";
import { FavouritesScreen } from "./screens/FavouritesScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";
import { calculateTabbarBadge } from "../helpers/calculateTabbarBadge";
import { useTranslation } from "react-i18next";

export const BottomNavigator = () => {
  const Tabs = createBottomTabNavigator();
  const { GeneralResponse } = useSelector((state) => state);
  const { t } = useTranslation();

  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen
        name={t("home")}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={t("basket")}
        component={BasketScreen}
        options={{
          tabBarBadge: calculateTabbarBadge(GeneralResponse.basketItems),
          tabBarBadgeStyle:
            GeneralResponse.basketItems.length === 0 ? { display: "none" } : {},
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={t("favourites")}
        component={FavouritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={t("settings")}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" size={35} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

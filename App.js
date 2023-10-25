import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";
// import ChangeLangButton from "./src/components/ChangeLangButton";

export default function App() {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t("water")}</Text>
      {/* <ChangeLangButton /> */}
      <StatusBar style="auto" />
    </View>
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

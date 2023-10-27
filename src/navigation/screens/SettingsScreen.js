import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import ChangeLangButton from "../../components/ChangeLangButton";
import ChangeThemeButton from "../../components/ChangeThemeButton";
import { useTranslation } from "react-i18next";

export const SettingsScreen = () => {
  const { GeneralResponse } = useSelector((state) => state);
  const { t } = useTranslation();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: GeneralResponse.theme.backgroundColor },
      ]}
    >
      <View style={styles.profile}>
        <Text
          style={[
            styles.profileText,
            { textAlign: "center", color: GeneralResponse.theme.textColor },
          ]}
        >
          {t("thankYou")}
        </Text>
        <Text style={styles.profileText}>
          {t("name")}: {GeneralResponse.name}
        </Text>
        <Text style={styles.profileText}>
          {t("surname")}: {GeneralResponse.surname}
        </Text>
        <Text style={styles.profileText}>
          {t("age")}: {GeneralResponse.age}
        </Text>
      </View>
      <View style={styles.buttons}>
        <ChangeLangButton />
        <ChangeThemeButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profile: {
    marginBottom: 20,
  },
  profileText: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttons: {
    width: "100%",
  },
});

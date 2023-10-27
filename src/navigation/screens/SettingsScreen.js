import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const SettingsScreen = () => {
  const { GeneralResponse } = useSelector((state) => state);

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Text style={styles.profileText}>Ad: {GeneralResponse.name}</Text>
        <Text style={styles.profileText}>Soyad: {GeneralResponse.surname}</Text>
        <Text style={styles.profileText}>Yaş: {GeneralResponse.age}</Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title="Change Language"
          onPress={() => console.log("Ayarlar butonuna tıklandı")}
        />
        <Button
          title="Change Theme"
          onPress={() => console.log("Profil Düzenle butonuna tıklandı")}
        />
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

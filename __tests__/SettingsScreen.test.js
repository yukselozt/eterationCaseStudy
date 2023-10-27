import React from "react";
import { render } from "@testing-library/react-native";
import { SettingsScreen } from "../src/navigation/screens/SettingsScreen.js";

describe("SettingsScreen", () => {
  it("Profil bilgileri doğru bir şekilde görüntülenmeli", () => {
    const { getByText } = render(<SettingsScreen />);

    expect(getByText("Ad: Yüksel")).toBeTruthy();
    expect(getByText("Soyad: ÖZTÜRK")).toBeTruthy();
    expect(getByText("Yaş: 26")).toBeTruthy();
  });

  it("Change Language ve Change Theme düğmeleri bulunmalı", () => {
    const { getByText } = render(<SettingsScreen />);

    expect(getByText("Change Language")).toBeTruthy();
    expect(getByText("Change Theme")).toBeTruthy();
  });
});

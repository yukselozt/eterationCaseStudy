import React, { useState } from "react";
import { Button } from "react-native";
import { lightTheme, darkTheme } from "../theme/Theme";
import { useDispatch } from "react-redux";
import { ChangeTheme } from "../redux/action";
import { useTranslation } from "react-i18next";

const ChangeThemeButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <Button title={t("changeTheme")} onPress={() => dispatch(ChangeTheme())} />
  );
};

export default ChangeThemeButton;

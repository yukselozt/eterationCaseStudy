import React from "react";
import "../../i18n";
import { useTranslation } from "react-i18next";
import { Button } from "react-native";

const ChangeLangButton = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("tr");
    } else if (i18n.language === "tr") {
      i18n.changeLanguage("en");
    }
  };
  return (
    <Button title={t("changeLanguage")} onPress={() => changeLanguage()} />
  );
};

export default ChangeLangButton;

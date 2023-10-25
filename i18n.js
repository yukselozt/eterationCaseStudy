import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import tr from "./translations/tr.json";

i18n.use(initReactI18next).init({
  // we init with resources
  compatibilityJSON: "v3",
  resources: {
    en: {
      translations: en,
      //   {
      //     water: "Water Reminder",
      //     changeLanguage: "Change Language",
      //   },
    },
    tr: {
      translations: tr,
      //   {
      //     water: "Su İçme Hatırlatıcısı",
      //     changeLanguage: "Dili Değiştir",
      //   },
    },
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

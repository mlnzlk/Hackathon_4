import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import TranslationEn from "./translation.en.json";

const resource = {
  en: {
    translations: TranslationEn,
  },
};

i18n.use(initReactI18next).init({
  resources: resource,
  lng: "ko",
  fallbackLng: "ko",
  defaultNS: "translations",
  ns: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

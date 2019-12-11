import * as RNLocalize from "react-native-localize";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import it from './it.json'
import en from './en.json'


const { languageTag } = RNLocalize.findBestAvailableLanguage(['en', 'it']);

i18n.use(initReactI18next)
  .init({
    resources: {
      it: it,
      en: en
    },
    lng: languageTag,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
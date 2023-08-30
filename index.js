/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {initReactI18next} from 'react-i18next';
import i18n from 'i18next';
import * as RNLocalize from 'react-native-localize';

import en from './src/translations/en';
import de from './src/translations/de';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    de: {translation: de},
  },
  compatibilityJSON: 'v3',
  lng: RNLocalize.getLocales()[0].languageCode,
  interpolation: {
    escapeValue: false,
  },
});

AppRegistry.registerComponent(appName, () => App);

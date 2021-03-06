import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import backend from 'i18next-http-backend';
import detector from 'i18next-browser-languagedetector';
import translationEN from 'locales/en/translation.json';

// the translations
const resources = {
    en: {
        translation: translationEN
    }
};

i18n.use(detector)
    .use(backend)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        lng: 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;

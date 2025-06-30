import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../../public/locales/en/common.json';
import translationHY from '../../public/locales/hy/common.json';
import translationRU from '../../public/locales/ru/common.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: translationEN },
            hy: { translation: translationHY },
            ru: { translation: translationRU },
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;

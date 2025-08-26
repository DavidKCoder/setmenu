"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
    .use(HttpBackend) // load translations from /public/locales
    .use(LanguageDetector) // detect + cache language
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        supportedLngs: ["en", "ru", "hy"],
        debug: false, // set true if you want console logs
        detection: {
            order: ["localStorage", "navigator"],
            caches: ["localStorage"],
            lookupLocalStorage: "i18nextLng",
        },
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        interpolation: {
            escapeValue: false,
        },
    });

// 👇 ensure localStorage is updated whenever language changes
i18n.on("languageChanged", (lng) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("i18nextLng", lng);
    }
});

export default i18n;

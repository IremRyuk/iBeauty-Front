import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from "react-i18next";
import en from './Data/global_en.json'
import sp from './Data/global_sp.json'
i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
            debug: false,
            lng: 'en',
            resources: {
                en: {
                    translation:en,
                },
                sp: {
                    translation:sp,
                }
            }
        })
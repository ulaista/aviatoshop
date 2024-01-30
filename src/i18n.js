import az from './trans/az.json'
import ru from './trans/ru.json'

import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'


const resources = {
    ru: {
        translation: ru,
    },
    az:{
        translation: az,
    }
}

i18n
.use(initReactI18next)
.init({
    resources,
    lng:JSON.parse(localStorage.getItem('language')),
    fallbackLng:'ru'
})

export default i18n;
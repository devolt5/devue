import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to DeVue',
        aboutMsg: 'This is an about site'
    },
    'de': {
        welcomeMsg: 'Willkommen in der App "DeVue"',
        aboutMsg: 'Dies ist die Seite "Über"'
    }
};

const i18n = new VueI18n({
    locale: 'de',
    fallbackLocale: 'de',
    messages,
});

export default i18n

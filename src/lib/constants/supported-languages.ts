import type { ILanguage } from "$lib/interfaces/language.interface";

const english: ILanguage = {
    abbrev: 'en',
    text: 'English',
    flag: '/us-flag.gif'
};

const spanish: ILanguage = {
    abbrev: 'es',
    text: 'Spanish',
    flag: '/sp-flag.gif'
};

const hebrew: ILanguage = {
    abbrev: 'he',
    text: 'Hebrew',
    flag: '/is-flag.gif'
};

const greek: ILanguage = {
    abbrev: 'el',
    text: 'Greek',
    flag: '/gr-flag.gif'
};


export const supportedLanguages = [
    // 'en', 'el', 'es', 'he', 
    english, spanish, greek, hebrew
];

export const supportedLanguageMap = {
    [english.abbrev]: english,
    [greek.abbrev]: greek,
    [spanish.abbrev]: spanish,
    [hebrew.abbrev]: hebrew,
};
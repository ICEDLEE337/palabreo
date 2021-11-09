import type { IWord } from "$lib/interfaces/word.interface";

const cat: IWord = { en: 'small furry animal that is very cute', text: 'cat' };
const gato: IWord = { en: 'cat', text: 'gato' };
export const supportedWords = {
    en: [
        cat
    ],
    el: [
    ],
    es: [        
        gato
    ],
    he: [],
};
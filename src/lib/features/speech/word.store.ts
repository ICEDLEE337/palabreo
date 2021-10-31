import { writable } from 'svelte/store';

export const wordStore = (() => {
    const { subscribe } = writable([
        {
            lang: 'es',
            words: [
                { word: 'chocolate', meaning: '' },
                { word: 'leche', meaning: '' },
                { word: 'silla', meaning: '' },
                { word: 'helado', meaning: '' },
                { word: 'tortilla', meaning: '' },
                { word: 'hermoso', meaning: '' },
                { word: 'bebe', meaning: '' },
                { word: 'elefante', meaning: '' },
                { word: 'desierto', meaning: '' },
                { word: 'tambor', meaning: '' },
                { word: 'bigote', meaning: '' },
                { word: 'galleta', meaning: '' },
                { word: 'manzana', meaning: '' },
                { word: 'gracias', meaning: '' },
            ]
        },
        {
            lang: 'he',
            words: [
                {word: 'חטאה', meaning: 'sin; miss the mark'},

            ]
        },
        {
            lang: 'el',
            words: [
                { word: 'αγάπη', meaning: 'unconditional love' }
            ]
        }
    ]);

    return {
        subscribe
    };
})()

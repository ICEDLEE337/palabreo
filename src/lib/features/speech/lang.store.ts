import { derived } from 'svelte/store';
import { voiceStore } from './voice.store';

export const langStore = derived(voiceStore, ($voices) => {
    console.warn($voices);
    return $voices.reduce((acc, v) => {
        if(!acc.includes(v.lang)) {
            return [...acc, v.lang]
        } else {
            return acc;
        }
    }, []);
});


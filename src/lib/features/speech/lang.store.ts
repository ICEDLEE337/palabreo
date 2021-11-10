import { derived } from 'svelte/store';
import { parse } from './parse';
import { voiceStore } from './voice.store';

export const langStore = derived(voiceStore, ($voices) => {
    console.warn($voices);
    return $voices.reduce((acc, v) => {
        const parsed = parse(v.lang);
        if(!acc.includes(parsed.abbrev)) {
            return [...acc, parsed.abbrev]
        } else {
            return acc;
        }
    }, []);
});


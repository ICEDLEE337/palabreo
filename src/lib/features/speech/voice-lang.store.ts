import { writable } from 'svelte/store';
import { getVoicesByLang } from './get-voices-by-lang';
export const voiceLangStore = ((abbrev) => {
    const { subscribe, set } = writable([]);

    if (globalThis?.speechSynthesis) {
        globalThis.speechSynthesis.onvoiceschanged = () => {
            const voices = getVoicesByLang(abbrev)
            set(voices || [])
        };
    }

    return {
        subscribe
    };
})()

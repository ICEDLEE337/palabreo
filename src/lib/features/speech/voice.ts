import { writable } from 'svelte/store';

export const voiceStore = (() => {
    const { subscribe, set } = writable([]);

    if (globalThis?.speechSynthesis) {
        globalThis.speechSynthesis.onvoiceschanged = () => {
            set(globalThis?.speechSynthesis?.getVoices() || [])
        };
    }

    return {
        subscribe
    };
})()

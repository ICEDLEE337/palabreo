import { writable } from 'svelte/store';

export const voiceStore = (() => {
    const { subscribe, set } = writable([]);

    if (window?.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
            set(window?.speechSynthesis?.getVoices() || [])
        };
    }

    return {
        subscribe
    };
})()

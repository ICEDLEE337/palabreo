export function getVoiceByLang(lang: string): SpeechSynthesisVoice {
    const voices = globalThis.speechSynthesis.getVoices();
    console.warn(voices.map(v => v.lang))
    return voices.find(v => v.lang === lang)
};

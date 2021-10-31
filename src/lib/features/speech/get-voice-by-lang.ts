import { getVoices } from "./get-voices";

export function getVoiceByLang(lang: string): SpeechSynthesisVoice {
    const voices = getVoices();
    return voices.find(v => v.lang === lang)
};

import { getVoices } from "./get-voices";
import { parse } from "./parse";

export function getVoicesByLang(abbrev: string): SpeechSynthesisVoice[] {
    const voices = getVoices();
    return voices.filter(v => parse(v.lang).abbrev === abbrev)
};

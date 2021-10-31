import { getVoices } from "./get-voices";

export function getVoiceByUri(uri: string): SpeechSynthesisVoice {
    const voices = getVoices();
    return voices.find(({voiceURI}) => voiceURI === uri);
};

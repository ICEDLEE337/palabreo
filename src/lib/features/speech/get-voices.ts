export function getVoices(): SpeechSynthesisVoice[] {
    const voices = globalThis.speechSynthesis.getVoices();
    return voices;
};

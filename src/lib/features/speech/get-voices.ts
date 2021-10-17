export function getVoices(): SpeechSynthesisVoice[] {
    const voices = window.speechSynthesis.getVoices();
    return voices;
};

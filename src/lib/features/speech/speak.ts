export function speak(text, pitch, rate, voice, lang) {
    if (globalThis.speechSynthesis && globalThis.SpeechSynthesisUtterance) {
        let speech = new globalThis.SpeechSynthesisUtterance();
        speech.lang = lang;
        speech.pitch = pitch || undefined;
        speech.text = text || undefined;
        speech.rate = rate || undefined;
        speech.voice = voice;
        globalThis.speechSynthesis.speak(speech);
    }
}
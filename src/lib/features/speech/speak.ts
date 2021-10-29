export function speak(text: string, pitch: number, rate: number, voice, lang: string) {
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
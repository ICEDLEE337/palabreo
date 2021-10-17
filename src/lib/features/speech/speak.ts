export function speak(window, text, pitch, rate, voice, lang = 'en') {
    if (window?.speechSynthesis && window?.SpeechSynthesisUtterance) {
        let speech = new window.SpeechSynthesisUtterance();
        speech.lang = lang;
        speech.pitch = pitch || undefined;
        speech.text = text || undefined;
        speech.rate = rate || undefined;
        speech.voice = voice;
        window.speechSynthesis.speak(speech);
    }
}
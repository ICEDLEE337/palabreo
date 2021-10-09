export function speak(text, pitch, rate, voice, lang = 'en') {
    let speech = new window.SpeechSynthesisUtterance();
    speech.lang = lang;
    speech.pitch = pitch || 1;
    speech.text = text || 1;
    speech.rate = rate || 1;
    speech.voice = voice;
    window.speechSynthesis.speak(speech);
}

import { speak } from './speak';

export const allSpeak = () => window.speechSynthesis.getVoices().map(v => {
    speak('good morning', 100000, 11111, v)
    speak('malachi', -1000000, 1, v)
})
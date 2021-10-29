
import { getVoices } from './get-voices'
import { speak } from './speak'

export const allSpeak = () => getVoices().map(v => {
    speak('good morning', 100000, 11111, v, 'en')
    speak('malachi', -1000000, 1, v, 'en')
})
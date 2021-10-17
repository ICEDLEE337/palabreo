
import { getVoices } from './get-voices'
import { speak } from './speak'

export const allSpeak = () => getVoices().map(v => {
    speak('good morning', 100000, 11111, 1, v)
    speak('malachi', -1000000, 1, 1, v)
})
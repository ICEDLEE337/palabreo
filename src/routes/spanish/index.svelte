<a href="spanish/chocolate/">chocolate</a>
<a href="spanish/leche/">leche</a>

<button class="btn-1" on:click={click}>say word</button>

<script lang="ts">
    import {speak} from '$lib/speak';
    // function speak(text, pitch, rate, voice, lang = 'en') {
    //     let speech = new SpeechSynthesisUtterance();
    //     speech.lang = lang;
    //     speech.pitch = pitch;
    //     speech.text = text;
    //     speech.rate = rate;
    //     speech.voice = voice;
    //     window.speechSynthesis.speak(speech);
    // }

    function click() {
        window.speechSynthesis.getVoices().map(v => {
            speak('good morning', 100000, 11111, v)
            speak('malachi', -1000000, 1, v)
        })
    }
</script>
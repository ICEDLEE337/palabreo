<a href="spanish/chocolate/">chocolate</a>
<a href="spanish/leche/">leche</a>

<button on:click={click}>say word</button>

<script lang="ts">
    function speak(text, pitch, lang = 'en') {
        let speech = new SpeechSynthesisUtterance();
        speech.lang = lang;
        speech.pitch = pitch;
        speech.text = text;
        window.speechSynthesis.speak(speech);
    }

    function click() {
        speak('i like', -100000)
        speak('queso apestoso', 1000, 'es-419')
    }
</script>
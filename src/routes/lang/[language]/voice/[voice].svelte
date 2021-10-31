<script lang="ts">
    import { page } from '$app/stores';
    import { speak } from '$lib/features/speech/speak';
    import { voiceStore } from '$lib/features/speech/voice.store';
    import Voice from '$lib/components/voice.svelte';
import { onMount } from 'svelte';
import { getVoices } from '$lib/features/speech/get-voices';
import { getVoiceByLang } from '$lib/features/speech/get-voice-by-lang';

    let voice;
    const click = (word, voice) => speak(word, 2, 1, voice, 'es');

    function cue (text, l) {
        if (!voice) {
            voice = getVoiceByLang(l)
        }
        speak(text, 1, 1, voice, voice.lang)
    }

    let text;
</script>

<style lang="scss">
@import '@onivoro/browser-layout/index';
button {
    background-color: lime;
}
</style>

<div class="hero light blackice">
    <div>
        <h1>{ $page.params.voice } {$page.params.language}</h1>
    </div>

    <div class="row">
        <input class="btn stroked raised" bind:value={text} />

        <button on:click={() => cue(text, $page.params.language)}>speak</button>
    </div>
</div>
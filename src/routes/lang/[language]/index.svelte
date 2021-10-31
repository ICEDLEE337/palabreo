<script lang="ts">
    import { page } from '$app/stores';
    import { speak } from '$lib/features/speech/speak';
    import { voiceStore } from '$lib/features/speech/voice.store';
    import { wordStore } from '$lib/features/speech/word.store';
    import Voice from '$lib/components/voice.svelte';
import { onMount } from 'svelte';
import { getVoices } from '$lib/features/speech/get-voices';
import { getVoiceByLang } from '$lib/features/speech/get-voice-by-lang';

    let voice;
    const click = (word, voice) => speak(word, 2, 1, voice, 'es');

    function cue (text, voice) {
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
        <h1>{$page.params.language}</h1>
    </div>

    <div class="row">
        <input class="btn stroked raised" bind:value={text} />
    </div>

    <div class="row">
        {#each $wordStore as wordLang }
            {#if wordLang.lang === $page.params.language.split('-')[0]}
            {#each wordLang.words as word}
                <button on:click={() => (text = word.word)}>{word.word}</button>
            {/each}
            {/if}
        {/each}
    </div>

    <div class="pancake-stack">
        {#each $voiceStore as voice }
            {#if voice.lang === $page.params.language}
            <div class="pancake">
                <Voice lang={voice.lang} name={voice.name}>
                    <div class="row">
                        <input class="btn stroked raised" bind:value={text} />
                        {#if text}
                        <button class="raised" on:click={()=>cue(text, voice)}>{text}</button>
                        {/if}
                    </div>
                </Voice>
            </div>
            {/if}
        {/each}
    </div>

</div>
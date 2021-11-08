<script lang="ts">
    import { page } from '$app/stores';
    import { speak } from '$lib/features/speech/speak';
    import { voiceStore } from '$lib/features/speech/voice.store';
    import Voice from '$lib/components/voice.svelte'

    const click = (word, voice) => speak(word, 2, 1, voice, 'es');

    function cue (text, v) {
        speak(text, 1, 1, v, v.lang)
    }

</script>

<style lang="scss">
@import '@onivoro/browser-layout/index';

.hero {
    background-image: url('https://www.surfertoday.com/images/stories/beach-quotes.jpg');
}
</style>

<div class="hero blackice">
    <div>
        <h1>{ $page.params.word }</h1>

<div class="pancake-stack">
    {#each $voiceStore as voice }
        {#if voice.lang.includes($page.params.language)}
        <div class="pancake">
            <Voice lang={voice.lang} name={voice.name}>
                <div class="row">
                    <button class="stroked" on:click={()=>cue($page.params.word, voice)}>{$page.params.word}</button>
                </div>
            </Voice>
        </div>
        {/if}
    {/each}
</div>

</div>
</div>

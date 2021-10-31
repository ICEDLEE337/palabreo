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
.pancake-stack {
    min-width: 200px !important;
}
.pancake {
    min-width: 200px !important;
}
</style>

<div class="hero dark frost rad-1">
    <div>
        <h1>{ $page.params.word }</h1>
    </div>
</div>
<div class="pancake-stack">
    {#each $voiceStore as voice }
        {#if voice.lang.toLowerCase().includes('es')}
        <!-- <tr>
            <td>
                {#if voice} name { voice.name}{/if}
            </td>
            <td>
                {#if voice} lang { voice.lang}{/if}
            </td>
            <td>
                <button on:click={() => click($page.params.word, voice)}>{ $page.params.word }</button>
            </td>
        </tr> -->
        <div class="pancake">
            <Voice lang={voice.lang} name={voice.name}>
            <button class="btn-1" on:click={()=>cue($page.params.word, voice)}>{$page.params.word}</button>
            </Voice>
        </div>
        {/if}
    {/each}
</div>
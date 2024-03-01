<script lang="ts">
    import { voiceStore } from '$lib/features/speech/voice.store';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    onMount(() => {
        page.subscribe(({params}) => {
            params.voice
        })
    })
</script>

<style lang="scss">
@import '@onivoro/browser-layout/background';
@import '@onivoro/browser-layout/button';
@import '@onivoro/browser-layout/hero';
@import '@onivoro/browser-layout/scroll';
@import '@onivoro/browser-layout/card';

.pancake-stack {
    @extend .scroll;
    max-height: 70vh;
}
</style>

<div class="hero light blackice">
    <div>
        <h1>Voices</h1>
    </div>

    <div class="pancake-stack card">
        {#each $voiceStore as voice }
        <a class="pancake stroked" href={'lang/' + voice.lang + '/voice/' + voice.name}>
            <h1>{voice.name} {voice.lang}</h1>
        </a>
        {/each}
    </div>
</div>
<script lang="ts">
    import { voiceStore } from '$lib/features/speech/voice.store';
    let langs;
</script>

<style lang="scss">
@import '@onivoro/browser-layout/background';
@import '@onivoro/browser-layout/button';
@import '@onivoro/browser-layout/hero';
</style>

<div class="hero light blackice">
    <div>
        <h1>Voices</h1>
    </div>
</div>

<div class="pancake-stack">
    {#each $voiceStore as voice }
        <a class="pancake stroked" href={'lang/' + voice.lang + '/voice/' + voice.name}>
           <h1>{voice.name} {voice.lang}</h1>
        </a>
    {/each}
</div>
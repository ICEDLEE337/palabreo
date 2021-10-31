<script lang="ts">
    import { page } from '$app/stores';
    import { voiceStore } from '$lib/features/speech/voice.store';
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
</div>

<div class="pancake-stack">
    {#each $voiceStore as voice }
        {#if voice.lang.includes($page.params.language)}
        <a class="pancake stroked" href={voice.lang}>
           <h1>{voice.name}</h1>
        </a>
        {/if}
    {/each}
</div>
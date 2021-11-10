<script lang="ts">
    import { supportedLanguages } from '$lib/constants/supported-languages';
    let langs;
</script>

<style lang="scss">
@import '@onivoro/browser-layout/background';
@import '@onivoro/browser-layout/button';
@import '@onivoro/browser-layout/hero';
</style>

<div class="hero">
    <div>
        <h1>Supported Languages</h1>
    </div>
</div>

<div class="pancake-stack">
    {#each supportedLanguages as lang }
        <a class="pancake stroked" href={lang.abbrev}>
           <h2>{lang.text}</h2>
        </a>
    {/each}
</div>